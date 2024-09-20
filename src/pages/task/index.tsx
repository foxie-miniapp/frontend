import SingleTask from '@/components/task/single_task'
import TaskSkeletonLoader from '@/components/task/task-skeleton'
import { useFetchQuests } from '@/hooks/use-fetch-quest'
import useQuest from '@/store/quest.store'
import useUser from '@/store/user.store'

const TaskPage = () => {
  const { isLoading } = useFetchQuests()
  const data = useQuest((state) => state.quests)
  const exp = useUser((state) => state.user?.exp)

  return (
    <div className="relative flex min-h-screen w-full flex-col gap-6 overflow-x-hidden bg-[#0F010B] px-5 pb-7 pt-6">
      <div className="absolute left-1/2 top-[-20%] -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="414"
          height="335"
          viewBox="0 0 414 335"
          fill="none"
        >
          <g filter="url(#filter0_f_39_4386)">
            <ellipse cx="204.5" cy="79.5" rx="127.5" ry="55.5" fill="#C33D00" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4386"
              x="-123"
              y="-176"
              width="655"
              height="511"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_39_4386"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex w-full flex-row items-center justify-between rounded-[12px] bg-[#F1ECD414] p-3 font-semibold text-[#FFF1C4]">
        <p className="text-sm font-normal">Total EXP Claimed</p>
        <p className="text-sm font-bold text-[#FFB625]">{exp} EXP</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="relative h-[160px] w-[220px]">
          <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="431"
              height="280"
              viewBox="0 0 431 280"
              fill="none"
            >
              <g opacity="0.7" filter="url(#filter0_f_2056_1050)">
                <ellipse
                  cx="215.5"
                  cy="140"
                  rx="115.5"
                  ry="40"
                  fill="#FFCD5D"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_2056_1050"
                  x="0"
                  y="0"
                  width="431"
                  height="280"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="50"
                    result="effect1_foregroundBlur_2056_1050"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <img
            src="/images/tasks/task_bag.png"
            className="absolute inset-0 z-10 h-full w-full object-cover"
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className=" token-text text-[32px] font-semibold">
            Foxie’s Tasks!
          </h1>
          <p className="text-sm font-normal text-[rgba(255,249,229,0.60)]">
            Complete tasks, grab shiny rewards, and keep the adventure going!
            🦊✨
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <>
            <TaskSkeletonLoader />
            <TaskSkeletonLoader />
            <TaskSkeletonLoader />
          </>
        ) : (
          data?.map((task) => <SingleTask key={task._id} task={task} />)
        )}
      </div>
    </div>
  )
}

export default TaskPage
