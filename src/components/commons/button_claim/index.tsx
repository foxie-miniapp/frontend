type ButtonClaimProps = {
  title: string
  className?: string
  disabled?: boolean
  disabledTitle?: string
  onClick: () => void
}
const ButtonClaim = ({
  title,
  className,
  disabled,
  disabledTitle,
  onClick
}: ButtonClaimProps) => {
  return (
    <div
      className={`group relative inline-flex  w-full flex-1
        ${disabled ? '' : 'hover:cursor-pointer'} `}
    >
      <div
        className={`absolute -inset-px rounded-xl opacity-70 blur-lg
          ${
            disabled
              ? ''
              : 'bg-gradient-to-b from-gray-600 to-[#fff] duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200'
          }`}
      ></div>
      <div
        className={`relative flex  flex-1 select-none items-center justify-center rounded-xl px-8 py-4 text-center font-medium transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-gray-900 focus:ring-offset-2 ${className} ${
          disabled
            ? 'bg-[#807C71]'
            : 'bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%)]'
        }`}
        onClick={onClick}
      >
        {disabled ? disabledTitle : title}
      </div>
    </div>
  )
}

export default ButtonClaim
