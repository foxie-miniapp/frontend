import { FaTwitter } from 'react-icons/fa'

import { Quest, QuestLogo, QuestStatus } from '@/store/quest.store'

import ClaimButton from '../claim-button'
import CompleteButton from '../complete-button'

type SingleTaskProps = {
  task: Quest
}

const SingleTask = ({ task }: SingleTaskProps) => {
  return (
    <div className="flex max-h-[68px] w-full flex-row items-center justify-between gap-3 rounded-[16px] bg-[rgba(241,236,212,0.08)] p-3 transition-all duration-300 ease-in-out hover:bg-[rgba(241,236,212,0.12)] hover:shadow-lg">
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[rgba(255,255,255,0.2)] bg-[radial-gradient(101.3%_100%_at_50%_100%,rgba(255,183,32,0.35)_0%,rgba(255,241,213,0.08)_73.5%)] text-white transition-transform duration-300 ease-in-out hover:scale-110">
          <div className="max-h-[24px] max-w-[24px]">
            {task.logo === QuestLogo.X && <FaTwitter size={24} />}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-[14px] font-normal text-[#FFF1C4] transition-colors duration-300 ease-in-out hover:text-white">
            {task.title}
          </p>
          <div className="flex flex-row items-center gap-1 text-[14px] font-medium text-[#FFB625] transition-all duration-300 ease-in-out hover:gap-2">
            <div className="h-4 w-4 transition-transform duration-300 ease-in-out hover:rotate-12">
              <img
                src="/icons/logo.svg"
                className="h-full w-full object-cover"
                alt="logo"
              />
            </div>
            {task.pointsReward}
          </div>
        </div>
      </div>

      {task.status === QuestStatus.IN_PROGRESS && (
        <CompleteButton
          questId={task._id}
          url={task.url}
          questType={task.type}
        />
      )}

      {task.status === QuestStatus.COMPLETED && (
        <ClaimButton questId={task._id} point={task.pointsReward} />
      )}

      {task.status === QuestStatus.CLAIMED && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <circle cx="12" cy="12" r="12" fill="#39DE39" />
          <path
            d="M7.8 12.6L10.2 15L16.2 9"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  )
}

export default SingleTask
