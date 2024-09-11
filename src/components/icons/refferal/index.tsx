const Refferal = ({ active }: { active: boolean }) => {
  return (
    <div className={active ? 'text-[#FFF1C4]' : 'text-[#807C71]'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <g clipPath="url(#clip0_156_145)">
          <circle
            cx="12.25"
            cy="6"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18.25 9C19.9069 9 21.25 7.88071 21.25 6.5C21.25 5.11929 19.9069 4 18.25 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.25 9C4.59315 9 3.25 7.88071 3.25 6.5C3.25 5.11929 4.59315 4 6.25 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse
            cx="12.25"
            cy="17"
            rx="6"
            ry="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M20.25 19C22.0042 18.6153 23.25 17.6411 23.25 16.5C23.25 15.3589 22.0042 14.3847 20.25 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.25 19C2.49575 18.6153 1.25 17.6411 1.25 16.5C1.25 15.3589 2.49575 14.3847 4.25 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_156_145">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.25)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Refferal
