import SingleTask from '@/components/task/single_task'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaFacebookSquare, FaTelegram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { useFetchQuests } from '@/hooks/use-fetch-quest'
import useUser from '@/store/user.store'

const TaskPage = () => {
  const { isLoading, data } = useFetchQuests()
  const exp = useUser((state) => state.user?.exp)

  return (
    <div className="flex h-full w-full flex-col gap-6 px-5 pt-6">
      <div className="flex w-full flex-row items-center justify-between rounded-[12px] bg-[#F1ECD414] p-3 font-semibold text-white">
        <p>Total EXP Claimed</p>
        <p className="text-sm font-bold text-[#FFB625]">{exp} EXP</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="h-[160px] w-[150px]">
          <img
            src="/images/task_bag.png"
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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((task) => <SingleTask key={task._id} task={task} />)
        )}
      </div>
    </div>
  )
}

export default TaskPage
