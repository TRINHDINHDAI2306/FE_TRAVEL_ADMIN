const ACCESS_TOKEN = 'access_token'
const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

const setAccessToken = (token: string | undefined = undefined) => {
  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }
}

const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN)
}

const DEVICE_ID = 'device_id'

const getDeviceId = () => {
  return localStorage.getItem(DEVICE_ID)
}

const setDeviceId = (deviceId: string | undefined = undefined) => {
  if (deviceId) {
    localStorage.setItem(DEVICE_ID, deviceId)
  }
}

const removeDeviceId = () => {
  localStorage.removeItem(DEVICE_ID)
}

const REFRESH_TOKEN = 'refresh_token'

const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN)
}

const setRefreshToken = (refreshToken: string | undefined = undefined) => {
  if (refreshToken) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
  }
}

const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN)
}

export const localStorageServices = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getDeviceId,
  setDeviceId,
  removeDeviceId,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
}
