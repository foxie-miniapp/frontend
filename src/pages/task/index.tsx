import SingleTask from '@/components/task/single_task'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'

const TaskPage = () => {
  return (
    <div className="flex w-full flex-col p-2">
      <div className="flex w-full flex-col">
        <p className="text-center text-base font-bold text-white/40">
          Total Exp Claimed
        </p>
        <p className="text-center font-crotal text-lg font-bold text-white">
          0 EXP
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <SingleTask
          icon={<IoLogoInstagram size={40} />}
          isDone={false}
          points={200}
          title="Follow instagram"
        />

        <SingleTask
          icon={<FaFacebookSquare size={40} />}
          isDone={false}
          points={200}
          title="Follow Facebook"
        />
        <SingleTask
          icon={<FiYoutube size={40} />}
          isDone={false}
          points={200}
          title="Subcribe Youtube"
        />
        <SingleTask
          icon={<BsTwitterX size={40} />}
          isDone={false}
          points={200}
          title="Follow Twitter"
        />
      </div>
    </div>
  )
}

export default TaskPage
