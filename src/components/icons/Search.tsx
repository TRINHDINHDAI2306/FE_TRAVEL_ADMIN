import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const Search: React.FC<IconProps> = ({ width = 16, height = 16, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_2202_161451)'>
      <path
        d='M15.8026 14.8619L11.8232 10.8825C12.9077 9.55625 13.4408 7.86392 13.3125 6.15556C13.1841 4.44721 12.404 2.85354 11.1336 1.7042C9.86321 0.554862 8.19963 -0.0622172 6.487 -0.019396C4.77436 0.0234252 3.1437 0.72287 1.93231 1.93426C0.720917 3.14566 0.0214721 4.77632 -0.0213491 6.48895C-0.0641703 8.20158 0.552909 9.86516 1.70225 11.1356C2.85159 12.406 4.44526 13.1861 6.15361 13.3144C7.86196 13.4428 9.5543 12.9096 10.8806 11.8252L14.8599 15.8045C14.9856 15.926 15.154 15.9932 15.3288 15.9916C15.5036 15.9901 15.6708 15.92 15.7944 15.7964C15.9181 15.6728 15.9882 15.5056 15.9897 15.3308C15.9912 15.156 15.924 14.9876 15.8026 14.8619ZM6.66457 11.9999C5.60974 11.9999 4.57859 11.6871 3.70153 11.101C2.82446 10.515 2.14088 9.68204 1.73721 8.7075C1.33354 7.73296 1.22793 6.66061 1.43371 5.62604C1.6395 4.59147 2.14745 3.64117 2.89333 2.89529C3.63921 2.14941 4.58952 1.64145 5.62409 1.43567C6.65865 1.22988 7.73101 1.3355 8.70555 1.73916C9.68009 2.14283 10.513 2.82642 11.0991 3.70348C11.6851 4.58054 11.9979 5.61169 11.9979 6.66652C11.9963 8.08052 11.4339 9.43615 10.4341 10.436C9.4342 11.4359 8.07857 11.9983 6.66457 11.9999Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_2202_161451'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default Search
