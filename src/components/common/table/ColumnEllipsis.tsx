import { Typography } from 'antd'

export const ColumnEllipsis = ({ value }: { value: any }) => {
  return (
    <Typography.Paragraph
      className='!mb-0'
      ellipsis={{
        rows: 1,
        tooltip: true,
      }}
    >
      {value}
    </Typography.Paragraph>
  )
}
