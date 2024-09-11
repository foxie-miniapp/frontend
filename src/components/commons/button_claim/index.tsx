type ButtonClaimProps = {
  title: string
  className?: string
  onClick: () => void
}
const ButtonClaim = ({ title, className, onClick }: ButtonClaimProps) => {
  return (
    <div
      className={`flex flex-1 items-center justify-center py-4 text-center ${className}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default ButtonClaim
