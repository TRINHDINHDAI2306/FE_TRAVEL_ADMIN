/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Button, Modal, Form, Input, message, Select, InputNumber, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import dayjs from 'dayjs'
import { handleAddVoucher } from '@/api/manageVouchers/useGetVouchers'
import { I18nInstance as i18n } from '@/lib/i18n'

interface Props {
  visible: boolean
  closed: () => void
  setKeyLoad: () => void
}

const ModalAddVoucher: React.FC<Props> = ({ visible, closed, setKeyLoad }) => {
  const [startDate, setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs().add(1, 'day'))
  const { Option } = Select
  const { RangePicker } = DatePicker
  const [form] = Form.useForm()
  const dateFormat = 'DD/MM/YYYY'

  const handleCancel = () => {
    form.resetFields()
    closed()
  }
  const onChange = (date: any, dateString: any) => {
    console.log(dateString)

    setStartDate(dayjs(dateString[0], 'DD/MM/YYYY'))
    setEndDate(dayjs(dateString[1], 'DD/MM/YYYY'))
  }
  const onFinish = async (values: any) => {
    values.startDate = startDate.format('YYYY-MM-DD HH:mm')
    values.endDate = endDate.format('YYYY-MM-DD HH:mm')
    const result = await handleAddVoucher(values)
    if (result.statusCode == 200) {
      message.success(i18n.t('message:SUCCESS.WEB_S_MSG_003'))
      closed()
      setKeyLoad()
    } else {
      message.error('thất bại')
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Modal title='Thêm voucher' centered visible={visible} footer={null} onCancel={handleCancel}>
      <div className='popup-content'>
        <Form form={form} name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
          <Form.Item
            label='Tên voucher'
            name='name'
            rules={[
              {
                required: true,
                message: 'Tên voucher không đưọc để trống!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Mã Voucher'
            name='code'
            rules={[
              {
                required: true,
                message: 'Mã code không đưọc để trống!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Nội dung voucher'
            name='description'
            rules={[
              {
                required: true,
                message: 'Nội dung không đưọc để trống không đưọc để trống!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className='group' style={{ display: 'flex' }}>
            <Form.Item
              label='Số giảm'
              name='value'
              rules={[
                {
                  required: true,
                  message: 'Số giảm không đưọc để trống!',
                },
              ]}
            >
              <InputNumber min={1} max={1000} />
            </Form.Item>{' '}
            <Form.Item name='quantity' label='Số lượng' initialValue={10}>
              <InputNumber min={1} max={1000} placeholder='Số mã giảm giá' />
            </Form.Item>
          </div>
          <div className='group'>
            <Form.Item name='discountType' label='Loại mã' initialValue='0'>
              <Select placeholder='Loại mã'>
                <Option value='0'>Giảm theo %</Option>
                <Option value='1'>vnđ</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name='requirementPoint'
              label='Điểm cần để đổi'
              rules={[
                {
                  required: true,
                  message: 'Điểm không đưọc để trống!',
                },
              ]}
            >
              <InputNumber min={1} max={1000} placeholder='Nhập số điểm cần để đổi' />
            </Form.Item>
          </div>
          <Form.Item name='time' label='Thời gian'>
            <RangePicker defaultValue={[startDate, endDate]} format={dateFormat} onChange={onChange} />
          </Form.Item>
          <Form.Item>
            <div className='group-button'>
              <Button type='primary' danger htmlType='submit' className='group-button-ok'>
                Tạo
              </Button>
              <Button
                className='button-normal group-button-no-ok'
                htmlType='reset'
                style={{ marginLeft: 10 }}
                onClick={closed}
              >
                Hủy
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
export default ModalAddVoucher
