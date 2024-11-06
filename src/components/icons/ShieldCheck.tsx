import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const ShieldCheck: React.FC<IconProps> = ({ width = '16', height = '16', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1408_96200)'>
      <path
        d='M12.386 1.42683L8.20937 0.0341605C8.07261 -0.0113868 7.92478 -0.0113868 7.78803 0.0341605L3.61137 1.42683C2.9473 1.64741 2.36964 2.07167 1.96046 2.6393C1.55128 3.20694 1.33139 3.88909 1.33203 4.58883V8.00016C1.33203 13.0422 7.46537 15.8268 7.72803 15.9428C7.81325 15.9807 7.90545 16.0002 7.9987 16.0002C8.09194 16.0002 8.18415 15.9807 8.26937 15.9428C8.53203 15.8268 14.6654 13.0422 14.6654 8.00016V4.58883C14.666 3.88909 14.4461 3.20694 14.0369 2.6393C13.6278 2.07167 13.0501 1.64741 12.386 1.42683ZM13.332 8.00016C13.332 11.6368 9.11937 14.0222 7.9987 14.5928C6.8767 14.0242 2.66537 11.6462 2.66537 8.00016V4.58883C2.6654 4.16901 2.79755 3.75985 3.04308 3.41932C3.2886 3.07879 3.63506 2.82416 4.03337 2.69149L7.9987 1.36949L11.964 2.69149C12.3623 2.82416 12.7088 3.07879 12.9543 3.41932C13.1999 3.75985 13.332 4.16901 13.332 4.58883V8.00016Z'
        fill='currentColor'
      />
      <path
        d='M10.1986 5.53326L7.40659 8.33327L5.91059 6.77327C5.85055 6.70762 5.77799 6.65466 5.69716 6.6175C5.61634 6.58033 5.5289 6.55972 5.43999 6.55687C5.35108 6.55403 5.26249 6.569 5.17946 6.60092C5.09643 6.63284 5.02062 6.68105 4.9565 6.74271C4.89239 6.80438 4.84127 6.87826 4.80614 6.95999C4.77102 7.04172 4.75261 7.12965 4.752 7.2186C4.75139 7.30756 4.76858 7.39574 4.80257 7.47794C4.83657 7.56015 4.88667 7.63472 4.94992 7.69727L6.48726 9.29727C6.60191 9.42111 6.74048 9.5204 6.8946 9.58916C7.04872 9.65791 7.21518 9.69469 7.38392 9.69727H7.40592C7.57129 9.69782 7.73513 9.66551 7.88791 9.60222C8.04069 9.53893 8.17938 9.44593 8.29592 9.32861L11.1439 6.4806C11.2061 6.41853 11.2555 6.34481 11.2892 6.26366C11.3229 6.18251 11.3403 6.09551 11.3404 6.00764C11.3405 5.91976 11.3233 5.83273 11.2898 5.75151C11.2562 5.67029 11.207 5.59647 11.1449 5.53426C11.0829 5.47206 11.0091 5.42269 10.928 5.38898C10.8468 5.35526 10.7598 5.33786 10.672 5.33777C10.5841 5.33768 10.4971 5.35489 10.4158 5.38844C10.3346 5.42198 10.2608 5.47119 10.1986 5.53326Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_1408_96200'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default ShieldCheck