import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const BanIcon: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_2828_38719)'>
      <path
        d='M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0V0ZM8 1.33333C9.53765 1.33211 11.028 1.86517 12.216 2.84133L2.84134 12.216C2.04171 11.2399 1.53578 10.0567 1.38241 8.80429C1.22905 7.55182 1.43458 6.28156 1.97506 5.14136C2.51555 4.00116 3.36876 3.03792 4.43539 2.36376C5.50202 1.68961 6.73819 1.33227 8 1.33333ZM8 14.6667C6.46236 14.6679 4.97205 14.1348 3.784 13.1587L13.1587 3.784C13.9583 4.76011 14.4642 5.94325 14.6176 7.19572C14.771 8.44818 14.5654 9.71844 14.0249 10.8586C13.4845 11.9988 12.6312 12.9621 11.5646 13.6362C10.498 14.3104 9.26182 14.6677 8 14.6667Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_2828_38719'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default BanIcon