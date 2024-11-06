import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string
  height?: number | string
}

const ListCheck: React.FC<IconProps> = ({ width = '16', height = '16', ...props }) => (
  <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1408_63380)'>
      <path
        d='M2.6667 4.00012C2.40387 4.00081 2.14351 3.94937 1.90068 3.84879C1.65786 3.7482 1.43739 3.60046 1.25203 3.41412L0.222701 2.49812C0.090623 2.38036 0.0107332 2.21496 0.000606265 2.0383C-0.0095207 1.86164 0.0509447 1.6882 0.168701 1.55612C0.286457 1.42404 0.451858 1.34415 0.628517 1.33402C0.805176 1.3239 0.978623 1.38436 1.1107 1.50212L2.16737 2.44478C2.22786 2.51272 2.30161 2.56755 2.38409 2.60591C2.46656 2.64427 2.55601 2.66535 2.64694 2.66785C2.73786 2.67035 2.82834 2.65421 2.9128 2.62044C2.99725 2.58666 3.0739 2.53596 3.13803 2.47145L5.5407 0.184118C5.6699 0.0690981 5.83874 0.00879725 6.01157 0.0159519C6.1844 0.0231066 6.34768 0.0971565 6.46693 0.222461C6.58618 0.347766 6.65205 0.514514 6.65064 0.687486C6.64923 0.860457 6.58064 1.02611 6.45937 1.14945L4.0667 3.42545C3.88255 3.60853 3.66412 3.75352 3.4239 3.85212C3.18367 3.95073 2.92637 4.00102 2.6667 4.00012ZM16 2.66679C16 2.48997 15.9298 2.3204 15.8048 2.19538C15.6797 2.07036 15.5102 2.00012 15.3334 2.00012H8.6667C8.48989 2.00012 8.32032 2.07036 8.1953 2.19538C8.07027 2.3204 8.00003 2.48997 8.00003 2.66679C8.00003 2.8436 8.07027 3.01316 8.1953 3.13819C8.32032 3.26321 8.48989 3.33345 8.6667 3.33345H15.3334C15.5102 3.33345 15.6797 3.26321 15.8048 3.13819C15.9298 3.01316 16 2.8436 16 2.66679ZM4.0667 8.75879L6.45937 6.48279C6.52615 6.42333 6.58029 6.35105 6.61856 6.27025C6.65684 6.18944 6.67847 6.10176 6.68217 6.01243C6.68587 5.92309 6.67156 5.83393 6.64009 5.75024C6.60863 5.66654 6.56065 5.59004 6.49901 5.52527C6.43737 5.4605 6.36333 5.40879 6.2813 5.37322C6.19927 5.33765 6.11092 5.31894 6.02151 5.31821C5.9321 5.31748 5.84346 5.33474 5.76086 5.36897C5.67826 5.4032 5.60339 5.4537 5.5407 5.51745L3.1407 7.80479C3.01379 7.92614 2.84496 7.99387 2.66937 7.99387C2.49377 7.99387 2.32495 7.92614 2.19803 7.80479L1.13803 6.74812C1.0123 6.62668 0.843898 6.55948 0.6691 6.561C0.494302 6.56252 0.327094 6.63263 0.203488 6.75624C0.0798831 6.87984 0.00977044 7.04705 0.00825149 7.22185C0.00673255 7.39665 0.0739288 7.56505 0.195368 7.69079L1.25203 8.74745C1.62515 9.12065 2.13064 9.33126 2.65837 9.33339C3.18609 9.33551 3.69326 9.12897 4.06937 8.75879H4.0667ZM16 8.00012C16 7.82331 15.9298 7.65374 15.8048 7.52871C15.6797 7.40369 15.5102 7.33345 15.3334 7.33345H8.6667C8.48989 7.33345 8.32032 7.40369 8.1953 7.52871C8.07027 7.65374 8.00003 7.82331 8.00003 8.00012C8.00003 8.17693 8.07027 8.3465 8.1953 8.47152C8.32032 8.59655 8.48989 8.66679 8.6667 8.66679H15.3334C15.5102 8.66679 15.6797 8.59655 15.8048 8.47152C15.9298 8.3465 16 8.17693 16 8.00012ZM4.0667 14.0921L6.4567 11.8161C6.52348 11.7567 6.57762 11.6844 6.6159 11.6036C6.65417 11.5228 6.6758 11.4351 6.6795 11.3458C6.6832 11.2564 6.66889 11.1673 6.63742 11.0836C6.60596 10.9999 6.55798 10.9234 6.49634 10.8586C6.4347 10.7938 6.36066 10.7421 6.27863 10.7066C6.1966 10.671 6.10825 10.6523 6.01884 10.6515C5.92944 10.6508 5.84079 10.6681 5.75819 10.7023C5.67559 10.7365 5.60072 10.787 5.53803 10.8508L3.13803 13.1381C3.0739 13.2026 2.99725 13.2533 2.9128 13.2871C2.82834 13.3209 2.73786 13.337 2.64694 13.3345C2.55601 13.332 2.46656 13.3109 2.38409 13.2726C2.30161 13.2342 2.22786 13.1794 2.16737 13.1115L1.1107 12.1688C0.978623 12.051 0.805176 11.9906 0.628517 12.0007C0.451858 12.0108 0.286457 12.0907 0.168701 12.2228C0.0509447 12.3549 -0.0095207 12.5283 0.000606265 12.705C0.0107332 12.8816 0.090623 13.047 0.222701 13.1648L1.25203 14.0808C1.62515 14.454 2.13064 14.6646 2.65837 14.6667C3.18609 14.6688 3.69326 14.4623 4.06937 14.0921H4.0667ZM16 13.3335C16 13.1566 15.9298 12.9871 15.8048 12.862C15.6797 12.737 15.5102 12.6668 15.3334 12.6668H8.6667C8.48989 12.6668 8.32032 12.737 8.1953 12.862C8.07027 12.9871 8.00003 13.1566 8.00003 13.3335C8.00003 13.5103 8.07027 13.6798 8.1953 13.8049C8.32032 13.9299 8.48989 14.0001 8.6667 14.0001H15.3334C15.5102 14.0001 15.6797 13.9299 15.8048 13.8049C15.9298 13.6798 16 13.5103 16 13.3335Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_1408_63380'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default ListCheck