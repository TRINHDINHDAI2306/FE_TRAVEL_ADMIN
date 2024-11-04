import axios, { AxiosInstance, AxiosRequestConfig, CustomParamsSerializer, Method } from 'axios'
import { stringify } from 'qs'

import { Response } from '@/types/common'
import { localStorageServices } from '@/utils/localStorageServices'

interface HttpClientRequestConfig extends AxiosRequestConfig {
  url: string
}

type TRefresh = {
  access_token: string
  refresh_token: string
}

type RequestMethods = Extract<Method, 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'>

const UNAUTHORIZED = 401

const defaultConfig: AxiosRequestConfig = {
  timeout: 30000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.REACT_APP_API_URL,
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer,
  },
  withCredentials: false,
}

class HttpClient {
  private isRefreshing = false
  private failedQueue: { resolve: (token: string) => void; reject: (err: any) => void }[] = []
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static axiosInstance: AxiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest(): void {
    HttpClient.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorageServices.getAccessToken()
        const deviceId = localStorageServices.getDeviceId()
        config.headers['Authorization'] = `Bearer ${token}`
        config.headers['device_id'] = deviceId
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  private httpInterceptorsResponse(): void {
    HttpClient.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data
      },
      async (error) => {
        const originalRequest = error.config

        if (error.response?.status === UNAUTHORIZED && !originalRequest._retry) {
          if (!this.isRefreshing) {
            this.isRefreshing = true
            originalRequest._retry = true

            try {
              const { metaData } = await this.post<Response<TRefresh>>('/auth/rftoken', {
                data: {
                  refresh_token: localStorageServices.getRefreshToken(),
                  device_id: localStorageServices.getDeviceId(),
                },
              })

              localStorageServices.setAccessToken(metaData?.access_token)
              localStorageServices.setRefreshToken(metaData?.refresh_token)

              if (metaData?.access_token) this.failedQueue.forEach((prom) => prom.resolve(metaData.access_token))
              return HttpClient.axiosInstance(originalRequest)
            } catch (err) {
              this.failedQueue.forEach((prom) => prom.reject(err))
              localStorage.clear()
              return Promise.reject(error)
            } finally {
              this.isRefreshing = false
              this.failedQueue = []
            }
          }

          return new Promise((resolve, reject) => {
            this.failedQueue.push({
              resolve: (token: string) => {
                originalRequest.headers['Authorization'] = `Bearer ${token}`
                resolve(HttpClient.axiosInstance(originalRequest))
              },
              reject: (err: any) => {
                reject(err)
              },
            })
          })
        }

        return Promise.reject(error)
      },
    )
  }

  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: HttpClientRequestConfig,
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig,
    } as HttpClientRequestConfig
    return HttpClient.axiosInstance.request(config)
  }

  public post<T>(url: string, params?: AxiosRequestConfig, config?: HttpClientRequestConfig) {
    return this.request<T>('post', url, params, config)
  }

  public get<T>(url: string, params?: AxiosRequestConfig, config?: HttpClientRequestConfig) {
    return this.request<T>('get', url, params, config)
  }

  public patch<T>(url: string, params?: AxiosRequestConfig, config?: HttpClientRequestConfig) {
    return this.request<T>('patch', url, params, config)
  }

  public delete<T>(url: string, params?: AxiosRequestConfig, config?: HttpClientRequestConfig) {
    return this.request<T>('delete', url, params, config)
  }
}

export const http = new HttpClient()
