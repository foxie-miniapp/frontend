import { useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'

type SingleTaskProps = {
  title: string
  icon: React.ReactNode
  points: number
}

const SingleTask = ({ title, icon, points }: SingleTaskProps) => {
  const [currentState, setCurrentState] = useState(1)
  return (
    <div
      className="flex w-full flex-row justify-between gap-3 rounded-[12px] bg-[#F1ECD414] p-3"
      onClick={() => {
        if (currentState == 1) {
          setCurrentState(2)
        }
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/25 text-white">
          {icon}
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-[14px] font-normal text-[#FFF1C4]">{title}</p>
          <div className="flex flex-row items-center gap-1 text-[14px] font-bold text-yellow-300">
            <div className="h-4 w-4">
              <img
                src="/icons/logo.svg"
                className="h-full w-full object-cover"
                alt="logo"
              />
            </div>
            {points}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setCurrentState((prev) => prev + 1)
        }}
        disabled={currentState === 3}
        className={`text-white ${
          currentState == 2 && 'rounded-full bg-white/10 px-6 py-1 font-medium'
        }`}
      >
        {currentState == 1 && <IoChevronForward />}
        {currentState == 2 && 'Claim'}
        {currentState == 3 && (
          <div className="h-6 w-6">
            <img
              src="images/feet.svg"
              alt="feet"
              className="h-full w-full object-cover text-orange-500"
            />
          </div>
        )}
      </button>
    </div>
  )
}

export default SingleTask
