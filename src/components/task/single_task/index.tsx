import { useState } from 'react'

type SingleTaskProps = {
  title: string
  icon: React.ReactNode
  points: number
  isDone: boolean
}

const SingleTask = ({ title, icon, points, isDone }: SingleTaskProps) => {
  const [isTaskDone, setIsDone] = useState(isDone)
  return (
    <div className="flex w-full flex-row items-center justify-between gap-2 text-white">
      {icon}
      <div className="flex flex-1 flex-row items-center gap-2 border-b py-3">
        <div className="flex flex-1 flex-col gap-1 ">
          <span className=" text-lg font-semibold leading-[18px]">{title}</span>
          <span className="text-sm leading-[14px] text-gray-500">
            {points} EXP
          </span>
        </div>

        {!isTaskDone ? (
          <div className="h-10">
            <button
              onClick={() => {
                setIsDone(!isTaskDone)
              }}
              className="flex items-center justify-center rounded-full bg-white/20 px-4 py-1.5 font-crotal text-white "
            >
              Claim
            </button>
          </div>
        ) : (
          <div className="h-10 w-10">
            <img
              src="images/feet.svg"
              alt="feet"
              className="h-full w-full object-cover text-orange-500"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleTask
