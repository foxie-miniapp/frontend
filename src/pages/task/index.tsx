import SingleTask from '@/components/task/single_task'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'

const TaskPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-5 pt-6">
      <div className="flex w-full flex-row items-center justify-between rounded-[12px] bg-[#F1ECD414] p-3 font-semibold text-white">
        <p>Total EXP Claimed</p>
        <p className="text-sm font-bold text-[#FFB625]">2500 EXP</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="h-[160px] w-[150px]">
          <img
            src="/public/images/task_bag.png"
            className="h-full w-full object-cover"
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className=" text-[32px] font-semibold text-[#FFDB6F]">
            Foxie’s Tasks!
          </h1>
          <p className="text-[14px] font-normal text-[#FFF9E599]">
            Complete tasks, grab shiny rewards, and keep the adventure going!
            🦊✨
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SingleTask
          icon={<IoLogoInstagram size={24} />}
          points={200}
          title="Follow instagram"
        />

        <SingleTask
          icon={<FaFacebookSquare size={24} />}
          points={200}
          title="Follow Facebook"
        />
        <SingleTask
          icon={<FiYoutube size={24} />}
          points={200}
          title="Subcribe Youtube"
        />
        <SingleTask
          icon={<BsTwitterX size={24} />}
          points={200}
          title="Follow Twitter"
        />
      </div>
    </div>
  )
}

export default TaskPage
