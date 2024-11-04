import { InboxOutlined } from '@ant-design/icons'
import type { GetProp, UploadProps } from 'antd'
import { Flex, Image, message, Space, Upload } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  multiple: boolean
  extension: string
  setObjectKey: (objectKey: string) => void
  maxCount: number
  avatarUrl: string
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

export const UploadFile = ({ multiple, extension, setObjectKey, maxCount, avatarUrl: initialAvatarUrl }: Props) => {
  const { t } = useTranslation()
  const [previewImage, setPreviewImage] = useState<string>('')
  const [avatarUrl, setAvatarUrl] = useState<string>(initialAvatarUrl)

  const uploadProps: UploadProps = {
    name: 'file',
    multiple,
    method: 'POST',
    maxCount,
    action: import.meta.env.REACT_APP_API_URL + '/uploadFile',

    onChange: (info) => {
      if (info.file.status === 'removed') {
        setPreviewImage('')
        setObjectKey('')
        return
      }
      if (info.file.xhr?.response) {
        const response = JSON.parse(info.file.xhr.response)
        if (response.statusCode !== 201) message.error(response.message)
        else {
          setPreviewImage('')
          setObjectKey(response.metaData.aws_object_url)
        }
      }
    },

    beforeUpload(file) {
      let extensions = extension.split(',')
      extensions = extensions.map((extension) => extension.trim().replace('.', ''))
      const isValid = extensions.some((extension) => file.type.endsWith(extension))
      if (isValid) return file
      else {
        setPreviewImage('')
        setObjectKey('')
        message.error(t('upload:error'))
        return false
      }
    },

    onPreview: async (file) => {
      const data = await getBase64(file.originFileObj as FileType)
      setPreviewImage(data as string)
    },
  }

  const handleImageClick = () => {
    setPreviewImage('')
    setAvatarUrl('')
  }

  return (
    <Flex align='center' justify='center' gap='middle'>
      {(!previewImage && !avatarUrl) || previewImage === '' || avatarUrl === '' ? (
        <Upload.Dragger {...uploadProps} accept={extension}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined />
          </p>
          <p className='ant-upload-text'>{t('upload:description')}</p>
        </Upload.Dragger>
      ) : (
        <Space onClick={handleImageClick}>
          <Image className='!w-56 !rounded cursor-pointer' src={previewImage || avatarUrl} preview={false} />
        </Space>
      )}
    </Flex>
  )
}

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
