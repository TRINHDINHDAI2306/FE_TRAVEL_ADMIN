import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const DocumentSigned: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_3887_40194)'>
      <path
        d='M13.0233 2.08135L11.9193 0.976014C11.6104 0.665555 11.2431 0.419439 10.8384 0.251909C10.4338 0.0843796 9.99994 -0.00123733 9.562 1.35103e-05H5.33333C4.4496 0.00107208 3.60237 0.352602 2.97748 0.977494C2.35259 1.60239 2.00106 2.44962 2 3.33335V12.6667C2.00106 13.5504 2.35259 14.3976 2.97748 15.0225C3.60237 15.6474 4.4496 15.999 5.33333 16H10.6667C11.5504 15.999 12.3976 15.6474 13.0225 15.0225C13.6474 14.3976 13.9989 13.5504 14 12.6667V4.43801C14.0011 4.00014 13.9153 3.56639 13.7477 3.16188C13.58 2.75736 13.3338 2.3901 13.0233 2.08135ZM12.0807 3.02401C12.1752 3.11823 12.2599 3.22188 12.3333 3.33335H10.6667V1.66668C10.778 1.74089 10.8818 1.82574 10.9767 1.92001L12.0807 3.02401ZM12.6667 12.6667C12.6667 13.1971 12.456 13.7058 12.0809 14.0809C11.7058 14.456 11.1971 14.6667 10.6667 14.6667H5.33333C4.8029 14.6667 4.29419 14.456 3.91912 14.0809C3.54405 13.7058 3.33333 13.1971 3.33333 12.6667V3.33335C3.33333 2.80291 3.54405 2.29421 3.91912 1.91913C4.29419 1.54406 4.8029 1.33335 5.33333 1.33335H9.33333V3.33335C9.33333 3.68697 9.47381 4.02611 9.72386 4.27616C9.97391 4.52621 10.313 4.66668 10.6667 4.66668H12.6667V12.6667ZM10.6667 6.00001C10.8435 6.00001 11.013 6.07025 11.1381 6.19528C11.2631 6.3203 11.3333 6.48987 11.3333 6.66668C11.3333 6.84349 11.2631 7.01306 11.1381 7.13809C11.013 7.26311 10.8435 7.33335 10.6667 7.33335H5.33333C5.15652 7.33335 4.98695 7.26311 4.86193 7.13809C4.7369 7.01306 4.66667 6.84349 4.66667 6.66668C4.66667 6.48987 4.7369 6.3203 4.86193 6.19528C4.98695 6.07025 5.15652 6.00001 5.33333 6.00001H10.6667ZM11.3333 9.33335C11.3333 9.51016 11.2631 9.67973 11.1381 9.80475C11.013 9.92978 10.8435 10 10.6667 10H5.33333C5.15652 10 4.98695 9.92978 4.86193 9.80475C4.7369 9.67973 4.66667 9.51016 4.66667 9.33335C4.66667 9.15654 4.7369 8.98697 4.86193 8.86194C4.98695 8.73692 5.15652 8.66668 5.33333 8.66668H10.6667C10.8435 8.66668 11.013 8.73692 11.1381 8.86194C11.2631 8.98697 11.3333 9.15654 11.3333 9.33335ZM11.2053 11.6087C11.309 11.7512 11.3519 11.9291 11.3248 12.1032C11.2977 12.2774 11.2027 12.4337 11.0607 12.538C10.3852 13.0193 9.5852 13.2955 8.75667 13.3333C8.27259 13.331 7.80321 13.1667 7.42333 12.8667C7.20467 12.7167 7.12133 12.6667 6.95667 12.6667C6.51095 12.7357 6.09041 12.9179 5.73533 13.196C5.5945 13.2964 5.42016 13.3381 5.24913 13.3124C5.0781 13.2867 4.92377 13.1955 4.81872 13.0581C4.71368 12.9207 4.66615 12.7478 4.68616 12.576C4.70618 12.4042 4.79218 12.2469 4.926 12.1373C5.51345 11.6813 6.21885 11.4024 6.95933 11.3333C7.40342 11.3404 7.83275 11.4939 8.18067 11.77C8.33926 11.9127 8.54344 11.9942 8.75667 12C9.30178 11.9592 9.82598 11.7729 10.2747 11.4607C10.4177 11.357 10.5961 11.3143 10.7706 11.3421C10.9451 11.3698 11.1015 11.4657 11.2053 11.6087Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_3887_40194'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default DocumentSigned
