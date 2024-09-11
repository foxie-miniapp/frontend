const Task = ({ active }: { active: boolean }) => {
  return (
    <div className={active ? 'text-[#FFF1C4]' : 'text-[#807C71]'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M16.75 4.00174C18.925 4.01385 20.1029 4.1103 20.8713 4.87868C21.75 5.75736 21.75 7.17157 21.75 10V16C21.75 18.8284 21.75 20.2426 20.8713 21.1213C19.9926 22 18.5784 22 15.75 22H9.75C6.92157 22 5.50736 22 4.62868 21.1213C3.75 20.2426 3.75 18.8284 3.75 16V10C3.75 7.17157 3.75 5.75736 4.62868 4.87868C5.39706 4.1103 6.57497 4.01385 8.75 4.00174"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11.25 14L17.75 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.75 14H8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.75 10.5H8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.75 17.5H8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11.25 10.5H17.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11.25 17.5H17.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.75 3.5C8.75 2.67157 9.42157 2 10.25 2H15.25C16.0784 2 16.75 2.67157 16.75 3.5V4.5C16.75 5.32843 16.0784 6 15.25 6H10.25C9.42157 6 8.75 5.32843 8.75 4.5V3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

export default Task
