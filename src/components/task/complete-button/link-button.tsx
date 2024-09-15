type LinkButtonProps = {
  callCompleteQuest: () => void
  questUrl: string
}

const LinkButton = (props: LinkButtonProps) => {
  const { callCompleteQuest, questUrl } = props

  const onCompleteQuest = () => {
    window.open(questUrl, '_blank')
    callCompleteQuest()
  }

  return (
    <button
      className="text-[#FFF1C4] transition-all duration-300 ease-in-out hover:scale-110"
      onClick={onCompleteQuest}
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

export default LinkButton
