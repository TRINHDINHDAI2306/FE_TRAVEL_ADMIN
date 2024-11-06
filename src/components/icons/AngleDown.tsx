import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const AngleDown: React.FC<IconProps> = ({ width = '16', height = '16', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.4732 5.47332C12.4113 5.41084 12.3375 5.36124 12.2563 5.32739C12.175 5.29355 12.0879 5.27612 11.9999 5.27612C11.9119 5.27612 11.8248 5.29355 11.7435 5.32739C11.6623 5.36124 11.5885 5.41084 11.5266 5.47332L8.47323 8.52665C8.41126 8.58913 8.33752 8.63873 8.25628 8.67258C8.17504 8.70642 8.08791 8.72385 7.9999 8.72385C7.91189 8.72385 7.82475 8.70642 7.74351 8.67258C7.66227 8.63873 7.58854 8.58913 7.52656 8.52665L4.47323 5.47332C4.41126 5.41084 4.33752 5.36124 4.25628 5.32739C4.17504 5.29355 4.08791 5.27612 3.9999 5.27612C3.91189 5.27612 3.82475 5.29355 3.74351 5.32739C3.66227 5.36124 3.58854 5.41084 3.52656 5.47332C3.4024 5.59823 3.3327 5.7672 3.3327 5.94332C3.3327 6.11944 3.4024 6.28841 3.52656 6.41332L6.58656 9.47331C6.96157 9.84785 7.4699 10.0582 7.9999 10.0582C8.5299 10.0582 9.03823 9.84785 9.41323 9.47331L12.4732 6.41332C12.5974 6.28841 12.6671 6.11944 12.6671 5.94332C12.6671 5.7672 12.5974 5.59823 12.4732 5.47332Z'
      fill='currentColor'
    />
  </svg>
)

export default AngleDown
