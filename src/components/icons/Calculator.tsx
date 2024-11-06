import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const Calculator: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_3887_40188)'>
      <path
        d='M11.9998 16H3.99984C3.11611 15.9989 2.26888 15.6474 1.64398 15.0225C1.01909 14.3976 0.667562 13.5504 0.666504 12.6667V3.33333C0.667562 2.4496 1.01909 1.60237 1.64398 0.97748C2.26888 0.352588 3.11611 0.00105857 3.99984 0L11.9998 0C12.8836 0.00105857 13.7308 0.352588 14.3557 0.97748C14.9806 1.60237 15.3321 2.4496 15.3332 3.33333V12.6667C15.3321 13.5504 14.9806 14.3976 14.3557 15.0225C13.7308 15.6474 12.8836 15.9989 11.9998 16ZM3.99984 1.33333C3.4694 1.33333 2.9607 1.54405 2.58562 1.91912C2.21055 2.29419 1.99984 2.8029 1.99984 3.33333V12.6667C1.99984 13.1971 2.21055 13.7058 2.58562 14.0809C2.9607 14.456 3.4694 14.6667 3.99984 14.6667H11.9998C12.5303 14.6667 13.039 14.456 13.4141 14.0809C13.7891 13.7058 13.9998 13.1971 13.9998 12.6667V3.33333C13.9998 2.8029 13.7891 2.29419 13.4141 1.91912C13.039 1.54405 12.5303 1.33333 11.9998 1.33333H3.99984ZM10.6665 6.66667H5.33317C4.80274 6.66667 4.29403 6.45595 3.91896 6.08088C3.54388 5.70581 3.33317 5.1971 3.33317 4.66667C3.33317 4.13623 3.54388 3.62753 3.91896 3.25245C4.29403 2.87738 4.80274 2.66667 5.33317 2.66667H10.6665C11.1969 2.66667 11.7056 2.87738 12.0807 3.25245C12.4558 3.62753 12.6665 4.13623 12.6665 4.66667C12.6665 5.1971 12.4558 5.70581 12.0807 6.08088C11.7056 6.45595 11.1969 6.66667 10.6665 6.66667ZM5.33317 4C5.15636 4 4.98679 4.07024 4.86177 4.19526C4.73674 4.32029 4.6665 4.48986 4.6665 4.66667C4.6665 4.84348 4.73674 5.01305 4.86177 5.13807C4.98679 5.2631 5.15636 5.33333 5.33317 5.33333H10.6665C10.8433 5.33333 11.0129 5.2631 11.1379 5.13807C11.2629 5.01305 11.3332 4.84348 11.3332 4.66667C11.3332 4.48986 11.2629 4.32029 11.1379 4.19526C11.0129 4.07024 10.8433 4 10.6665 4H5.33317ZM3.99984 8.66667C3.86798 8.66667 3.73909 8.70577 3.62946 8.77902C3.51982 8.85227 3.43438 8.95639 3.38392 9.07821C3.33346 9.20003 3.32026 9.33407 3.34598 9.46339C3.3717 9.59271 3.4352 9.7115 3.52843 9.80474C3.62167 9.89797 3.74046 9.96147 3.86978 9.98719C3.9991 10.0129 4.13314 9.99971 4.25496 9.94925C4.37678 9.8988 4.4809 9.81335 4.55415 9.70371C4.6274 9.59408 4.6665 9.46519 4.6665 9.33333C4.6665 9.15652 4.59627 8.98695 4.47124 8.86193C4.34622 8.73691 4.17665 8.66667 3.99984 8.66667ZM6.6665 8.66667C6.53465 8.66667 6.40576 8.70577 6.29612 8.77902C6.18649 8.85227 6.10104 8.95639 6.05058 9.07821C6.00013 9.20003 5.98692 9.33407 6.01265 9.46339C6.03837 9.59271 6.10186 9.7115 6.1951 9.80474C6.28833 9.89797 6.40712 9.96147 6.53644 9.98719C6.66576 10.0129 6.79981 9.99971 6.92163 9.94925C7.04344 9.8988 7.14756 9.81335 7.22082 9.70371C7.29407 9.59408 7.33317 9.46519 7.33317 9.33333C7.33317 9.15652 7.26293 8.98695 7.13791 8.86193C7.01288 8.73691 6.84332 8.66667 6.6665 8.66667ZM9.33317 8.66667C9.20132 8.66667 9.07242 8.70577 8.96279 8.77902C8.85316 8.85227 8.76771 8.95639 8.71725 9.07821C8.66679 9.20003 8.65359 9.33407 8.67931 9.46339C8.70504 9.59271 8.76853 9.7115 8.86177 9.80474C8.955 9.89797 9.07379 9.96147 9.20311 9.98719C9.33243 10.0129 9.46648 9.99971 9.58829 9.94925C9.71011 9.8988 9.81423 9.81335 9.88748 9.70371C9.96074 9.59408 9.99984 9.46519 9.99984 9.33333C9.99984 9.15652 9.9296 8.98695 9.80457 8.86193C9.67955 8.73691 9.50998 8.66667 9.33317 8.66667ZM3.99984 11.3333C3.86798 11.3333 3.73909 11.3724 3.62946 11.4457C3.51982 11.5189 3.43438 11.6231 3.38392 11.7449C3.33346 11.8667 3.32026 12.0007 3.34598 12.1301C3.3717 12.2594 3.4352 12.3782 3.52843 12.4714C3.62167 12.5646 3.74046 12.6281 3.86978 12.6539C3.9991 12.6796 4.13314 12.6664 4.25496 12.6159C4.37678 12.5655 4.4809 12.48 4.55415 12.3704C4.6274 12.2607 4.6665 12.1319 4.6665 12C4.6665 11.8232 4.59627 11.6536 4.47124 11.5286C4.34622 11.4036 4.17665 11.3333 3.99984 11.3333ZM6.6665 11.3333C6.53465 11.3333 6.40576 11.3724 6.29612 11.4457C6.18649 11.5189 6.10104 11.6231 6.05058 11.7449C6.00013 11.8667 5.98692 12.0007 6.01265 12.1301C6.03837 12.2594 6.10186 12.3782 6.1951 12.4714C6.28833 12.5646 6.40712 12.6281 6.53644 12.6539C6.66576 12.6796 6.79981 12.6664 6.92163 12.6159C7.04344 12.5655 7.14756 12.48 7.22082 12.3704C7.29407 12.2607 7.33317 12.1319 7.33317 12C7.33317 11.8232 7.26293 11.6536 7.13791 11.5286C7.01288 11.4036 6.84332 11.3333 6.6665 11.3333ZM11.9998 8.66667C11.868 8.66667 11.7391 8.70577 11.6295 8.77902C11.5198 8.85227 11.4344 8.95639 11.3839 9.07821C11.3335 9.20003 11.3203 9.33407 11.346 9.46339C11.3717 9.59271 11.4352 9.7115 11.5284 9.80474C11.6217 9.89797 11.7405 9.96147 11.8698 9.98719C11.9991 10.0129 12.1331 9.99971 12.255 9.94925C12.3768 9.8988 12.4809 9.81335 12.5542 9.70371C12.6274 9.59408 12.6665 9.46519 12.6665 9.33333C12.6665 9.15652 12.5963 8.98695 12.4712 8.86193C12.3462 8.73691 12.1766 8.66667 11.9998 8.66667ZM12.6665 12C12.6665 11.8232 12.5963 11.6536 12.4712 11.5286C12.3462 11.4036 12.1766 11.3333 11.9998 11.3333H9.33317C9.15636 11.3333 8.98679 11.4036 8.86177 11.5286C8.73674 11.6536 8.6665 11.8232 8.6665 12C8.6665 12.1768 8.73674 12.3464 8.86177 12.4714C8.98679 12.5964 9.15636 12.6667 9.33317 12.6667H11.9998C12.1766 12.6667 12.3462 12.5964 12.4712 12.4714C12.5963 12.3464 12.6665 12.1768 12.6665 12Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_3887_40188'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Calculator
