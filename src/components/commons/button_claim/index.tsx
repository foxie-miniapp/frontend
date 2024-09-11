type ButtonClaimProps = {
  title: string
  className?: string
  onClick: () => void
}
const ButtonClaim = ({ title, className, onClick }: ButtonClaimProps) => {
  return (
    <div
      className={`flex-1 rounded-[12px] flex items-center justify-center bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%);]  py-4 text-center ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default ButtonClaim
