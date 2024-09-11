import { Quest, QuestLogo, QuestStatus } from '@/store/quest.store'
import { useState } from 'react'
import { FaTwitter } from 'react-icons/fa'
import { IoChevronForward } from 'react-icons/io5'
import CompleteButton from '../complete-button'
import ClaimButton from '../claim-button'

type SingleTaskProps = {
  task: Quest
}

const SingleTask = ({ task }: SingleTaskProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-3 rounded-[12px] bg-[#F1ECD414] p-3">
      <div className="flex flex-row items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/25 text-white">
          {task.logo === QuestLogo.X && <FaTwitter size={24} />}
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="text-[14px] font-normal text-[#FFF1C4]">{task.title}</p>
          <div className="flex flex-row items-center gap-1 text-[14px] font-bold text-yellow-300">
            <div className="h-4 w-4">
              <img
                src="/icons/logo.svg"
                className="h-full w-full object-cover"
                alt="logo"
              />
            </div>
            {task.pointsReward} $FOXIE
          </div>
        </div>
      </div>

      {task.status === QuestStatus.IN_PROGRESS && (
        <CompleteButton questId={task._id} questType={task.type} />
      )}

      {task.status === QuestStatus.COMPLETED && (
        <ClaimButton questId={task._id} point={task.pointsReward} />
      )}

      {task.status === QuestStatus.CLAIMED && (
        <div className="h-6 w-6">
          <img
            src="images/feet.svg"
            alt="feet"
            className="h-full w-full object-cover text-orange-500"
          />
        </div>
      )}
    </div>
  )
}

export default SingleTask
