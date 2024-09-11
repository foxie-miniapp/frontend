type ButtonClaimProps = {
  title: string
  className?: string
  onClick: () => void
}
const ButtonClaim = ({ title, className, onClick }: ButtonClaimProps) => {
  return (
    <div
      className={`flex flex-1 items-center justify-center rounded-[12px] bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%);]  py-4 text-center ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default ButtonClaim
