type ButtonClaimProps = {
  title: string
  className?: string
  onClick: () => void
}
const ButtonClaim = ({ title, className, onClick }: ButtonClaimProps) => {
  return (
    <div className="group relative inline-flex  w-full flex-1">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-gray-600 to-[#fff] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
      <div
        className={`relative flex  flex-1 items-center   justify-center rounded-xl bg-gray-900 bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%)] px-8 py-4 text-center font-medium    transition-all duration-200 focus:outline-none focus:ring-2  focus:ring-gray-900 focus:ring-offset-2 ${className}`}
        onClick={onClick}
      >
        {title}
      </div>
    </div>
  )
}

export default ButtonClaim
