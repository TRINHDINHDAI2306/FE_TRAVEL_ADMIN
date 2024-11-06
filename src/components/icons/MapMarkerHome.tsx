import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const MapMarkerHome: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_5438_22254)'>
      <path
        d='M7.99919 0C6.54657 3.29195e-05 5.12668 0.431477 3.91961 1.23961C2.71253 2.04775 1.77266 3.19616 1.21919 4.53921C0.665713 5.88226 0.523578 7.35942 0.810806 8.78336C1.09803 10.2073 1.80169 11.5139 2.83252 12.5373L5.46119 14.9647C6.13684 15.626 7.044 15.9975 7.98948 16C8.93495 16.0025 9.84405 15.6358 10.5232 14.978L13.1845 12.5187C14.2101 11.4931 14.9085 10.1864 15.1914 8.76393C15.4743 7.34144 15.3291 5.86698 14.7741 4.52702C14.2191 3.18706 13.2792 2.04176 12.0732 1.23596C10.8673 0.430164 9.44955 4.60393e-05 7.99919 0V0ZM12.2605 11.558L9.60452 14.012C9.1678 14.4235 8.58981 14.6516 7.98979 14.6494C7.38977 14.6471 6.8135 14.4147 6.37985 14L3.75652 11.576C3.05882 10.8783 2.54396 10.0193 2.25754 9.07507C1.97112 8.13085 1.92198 7.13057 2.11448 6.16283C2.30698 5.19509 2.73517 4.28975 3.36113 3.52702C3.98708 2.76429 4.79148 2.16771 5.70308 1.79011C6.61467 1.41252 7.60532 1.26556 8.58727 1.36228C9.56922 1.45899 10.5122 1.79637 11.3326 2.34455C12.153 2.89273 12.8256 3.63478 13.2907 4.50497C13.7558 5.37516 13.9992 6.34663 13.9992 7.33333C14.0021 8.11736 13.85 8.89422 13.5516 9.61925C13.2532 10.3443 12.8145 11.0032 12.2605 11.558ZM11.1392 5.10867L9.13919 3.72133C8.80411 3.4898 8.40648 3.36578 7.99919 3.36578C7.5919 3.36578 7.19426 3.4898 6.85919 3.72133L4.85919 5.10867C4.59379 5.29278 4.37694 5.53843 4.22717 5.82461C4.0774 6.1108 3.99918 6.429 3.99919 6.752V9C3.99919 9.44203 4.17478 9.86595 4.48734 10.1785C4.7999 10.4911 5.22382 10.6667 5.66585 10.6667H10.3325C10.7745 10.6667 11.1985 10.4911 11.511 10.1785C11.8236 9.86595 11.9992 9.44203 11.9992 9V6.752C11.9992 6.429 11.921 6.1108 11.7712 5.82461C11.6214 5.53843 11.4046 5.29278 11.1392 5.10867ZM10.6659 9C10.6659 9.08841 10.6307 9.17319 10.5682 9.2357C10.5057 9.29822 10.4209 9.33333 10.3325 9.33333H9.33252V8C9.33252 7.82319 9.26228 7.65362 9.13726 7.5286C9.01223 7.40357 8.84266 7.33333 8.66585 7.33333H7.33252C7.15571 7.33333 6.98614 7.40357 6.86111 7.5286C6.73609 7.65362 6.66585 7.82319 6.66585 8V9.33333H5.66585C5.57745 9.33333 5.49266 9.29822 5.43015 9.2357C5.36764 9.17319 5.33252 9.08841 5.33252 9V6.752C5.33248 6.6443 5.35854 6.53818 5.40846 6.44275C5.45839 6.34731 5.53069 6.26539 5.61919 6.204L7.61919 4.81667C7.73099 4.73978 7.86349 4.69863 7.99919 4.69863C8.13488 4.69863 8.26738 4.73978 8.37919 4.81667L10.3792 6.204C10.4677 6.26539 10.54 6.34731 10.5899 6.44275C10.6398 6.53818 10.6659 6.6443 10.6659 6.752V9Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_5438_22254'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default MapMarkerHome
