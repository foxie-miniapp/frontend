import { useNavigate } from 'react-router-dom'

const ConnectButton = () => {
  const navigate = useNavigate()
  const handleRedirectToConnect = () => {
    navigate('/wallet')
  }

  return (
    <button
      className="text-[#FFF1C4] transition-all duration-300 ease-in-out hover:scale-110"
      onClick={handleRedirectToConnect}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 ease-in-out hover:translate-x-1"
      >
        <path
          d="M10 17L15 12L10 7"
          stroke="#FFF1C4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default ConnectButton
