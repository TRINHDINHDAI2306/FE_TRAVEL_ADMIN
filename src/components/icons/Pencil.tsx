import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const Pencil: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_352_8628)'>
      <path
        d='M15.2354 0.765333C14.7822 0.312798 14.1679 0.0586243 13.5274 0.0586243C12.887 0.0586243 12.2727 0.312798 11.8194 0.765333L0.976768 11.608C0.666269 11.9168 0.420076 12.284 0.252434 12.6885C0.0847909 13.093 -0.000973765 13.5268 0.00010154 13.9647V15.3333C0.00010154 15.5101 0.0703395 15.6797 0.195364 15.8047C0.320388 15.9298 0.489957 16 0.666768 16H2.03543C2.47328 16.0012 2.90701 15.9156 3.31154 15.7481C3.71606 15.5805 4.08334 15.3344 4.3921 15.024L15.2354 4.18067C15.6878 3.72746 15.9418 3.11331 15.9418 2.473C15.9418 1.83269 15.6878 1.21854 15.2354 0.765333ZM3.44943 14.0813C3.07344 14.4548 2.56541 14.6651 2.03543 14.6667H1.33343V13.9647C1.33276 13.7019 1.38421 13.4417 1.48479 13.199C1.58538 12.9563 1.73311 12.7359 1.91943 12.5507L10.1481 4.322L11.6814 5.85533L3.44943 14.0813ZM14.2921 3.238L12.6214 4.90933L11.0881 3.37933L12.7594 1.708C12.8601 1.60754 12.9796 1.52789 13.1111 1.47361C13.2425 1.41932 13.3834 1.39146 13.5256 1.39161C13.6678 1.39177 13.8086 1.41994 13.94 1.47451C14.0713 1.52908 14.1906 1.60899 14.2911 1.70967C14.3916 1.81035 14.4712 1.92983 14.5255 2.06129C14.5798 2.19275 14.6076 2.33362 14.6075 2.47584C14.6073 2.61807 14.5792 2.75888 14.5246 2.89022C14.47 3.02156 14.3901 3.14087 14.2894 3.24133L14.2921 3.238Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_352_8628'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Pencil
