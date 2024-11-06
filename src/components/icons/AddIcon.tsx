import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const AddIcon: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_352_8615)'>
      <path
        d='M15.3333 7.33333H8.66667V0.666667C8.66667 0.489856 8.59643 0.320286 8.47141 0.195262C8.34638 0.0702379 8.17681 0 8 0V0C7.82319 0 7.65362 0.0702379 7.5286 0.195262C7.40357 0.320286 7.33333 0.489856 7.33333 0.666667V7.33333H0.666667C0.489856 7.33333 0.320286 7.40357 0.195262 7.5286C0.0702379 7.65362 0 7.82319 0 8H0C0 8.17681 0.0702379 8.34638 0.195262 8.47141C0.320286 8.59643 0.489856 8.66667 0.666667 8.66667H7.33333V15.3333C7.33333 15.5101 7.40357 15.6797 7.5286 15.8047C7.65362 15.9298 7.82319 16 8 16C8.17681 16 8.34638 15.9298 8.47141 15.8047C8.59643 15.6797 8.66667 15.5101 8.66667 15.3333V8.66667H15.3333C15.5101 8.66667 15.6797 8.59643 15.8047 8.47141C15.9298 8.34638 16 8.17681 16 8C16 7.82319 15.9298 7.65362 15.8047 7.5286C15.6797 7.40357 15.5101 7.33333 15.3333 7.33333Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_352_8615'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default AddIcon
