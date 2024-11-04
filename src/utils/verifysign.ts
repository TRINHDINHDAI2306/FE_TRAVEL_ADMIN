import * as CryptoJS from 'crypto-js'

const generateNonce = (length: number = 16): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let nonce = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    nonce += chars[randomIndex]
  }

  return nonce
}

const generateSha256Signature = (data: string, secret: string = 'my_secret'): string => {
  return CryptoJS.SHA256(data + secret).toString(CryptoJS.enc.Hex)
}

interface SignatureData {
  timestamp: string
  nonce: string
  email: string
  signature: string
}

export const generateTimestampNonceEmailSignature = (email: string, secret: string): SignatureData => {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const nonce = generateNonce()
  const dataToSign = `${timestamp}${nonce}${email}`
  const signature = generateSha256Signature(dataToSign, secret)

  return {
    timestamp,
    nonce,
    email,
    signature,
  }
}

export const verifySignature = (
  email: string,
  nonce: string,
  timestamp: string,
  signature: string,
  secret: string,
): boolean => {
  const dataToSign = `${timestamp}${nonce}${email}`
  const expectedSignature = generateSha256Signature(dataToSign, secret)

  return expectedSignature === signature
}

export const verifyTimestamp = (timestamp: string, allowableWindowInSeconds: number = 500000): boolean => {
  const timeStamp = parseInt(timestamp)
  const currentTimestamp = Math.floor(Date.now() / 1000)

  return Math.abs(currentTimestamp - timeStamp) <= allowableWindowInSeconds
}
