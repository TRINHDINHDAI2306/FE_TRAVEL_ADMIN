import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const BellIcon: React.FC<IconProps> = ({ width = '16', height = '16', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15.0357 9.10844L13.769 4.55111C13.3977 3.216 12.5908 2.0433 11.4766 1.21942C10.3623 0.395547 9.00462 -0.0322311 7.61932 0.00408901C6.23402 0.0404091 4.90062 0.538742 3.83105 1.41988C2.76149 2.30101 2.01715 3.51438 1.71634 4.86711L0.735678 9.27711C0.627355 9.7644 0.629859 10.2698 0.743007 10.756C0.856154 11.2422 1.07705 11.6968 1.3894 12.0861C1.70174 12.4755 2.09756 12.7898 2.54762 13.0057C2.99768 13.2217 3.49049 13.3338 3.98968 13.3338H4.73234C4.88535 14.0873 5.29416 14.7648 5.88951 15.2514C6.48485 15.738 7.23011 16.0038 7.99901 16.0038C8.76791 16.0038 9.51318 15.738 10.1085 15.2514C10.7039 14.7648 11.1127 14.0873 11.2657 13.3338H11.8243C12.3382 13.3338 12.8451 13.215 13.3055 12.9867C13.7659 12.7584 14.1672 12.4268 14.4782 12.0177C14.7892 11.6086 15.0014 11.1331 15.0982 10.6285C15.195 10.1238 15.1739 9.60358 15.0363 9.10844H15.0357ZM7.99901 14.6671C7.58684 14.6654 7.18526 14.5364 6.84921 14.2977C6.51317 14.0591 6.25907 13.7224 6.12168 13.3338H9.87634C9.73896 13.7224 9.48486 14.0591 9.14881 14.2977C8.81276 14.5364 8.41118 14.6654 7.99901 14.6671ZM13.4163 11.2104C13.2306 11.4569 12.9899 11.6566 12.7134 11.7938C12.4369 11.9309 12.1323 12.0017 11.8237 12.0004H3.98968C3.6902 12.0004 3.39456 11.9331 3.12457 11.8035C2.85459 11.6739 2.61715 11.4853 2.42979 11.2517C2.24242 11.0181 2.10992 10.7454 2.04205 10.4537C1.97419 10.162 1.97269 9.85879 2.03768 9.56645L3.01768 5.15578C3.25391 4.09325 3.83855 3.14018 4.67865 2.44808C5.51875 1.75597 6.56609 1.36456 7.65419 1.33605C8.74229 1.30755 9.8087 1.64359 10.6839 2.29076C11.5591 2.93792 12.1928 3.85908 12.4843 4.90778L13.751 9.46511C13.8347 9.76203 13.848 10.0744 13.7899 10.3773C13.7318 10.6803 13.6039 10.9655 13.4163 11.2104Z'
      fill='currentColor'
    />
  </svg>
)

export default BellIcon
