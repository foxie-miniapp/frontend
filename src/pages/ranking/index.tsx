import { useQuery } from '@tanstack/react-query'

import RankingItem from '@/components/ranking/ranking-item'
import TaskSkeletonLoader from '@/components/task/task-skeleton'
import { QUERY_KEYS } from '@/lib/constants/query-key'
import { getLeaderboard } from '@/services/user'

const RankingPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USER.LEADERBOARD],
    queryFn: getLeaderboard
  })

  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-6 overflow-x-hidden bg-[#0F010B] px-5 pt-6">
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
      {/* SVG background (unchanged) */}
      <div className="flex flex-col gap-6">
        <div className="z-10 flex flex-col items-center gap-2 text-center">
          <h1 className="token-text text-[32px] font-semibold">Ranking</h1>
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
          {isLoading ? (
            <>
              <TaskSkeletonLoader />
              <TaskSkeletonLoader />
              <TaskSkeletonLoader />
            </>
          ) : (
            <>
              {data?.user && (
                <RankingItem
                  isMe
                  rank={data.user.rank}
                  photoUrl={data.user.photoUrl}
                  firstName={data.user.firstName}
                  lastName={data.user.lastName}
                  username={data.user.username}
                  points={data.user.points}
                />
              )}

              <div className="mt-3 flex items-center justify-between text-white">
                <p>{data?.total} holders</p>
                <p className="font-semibold text-[#FFB625]">TOP 100</p>
              </div>

              {data?.data?.map((item, index) => (
                <RankingItem
                  key={item._id}
                  isTop1={index === 0}
                  rank={index + 1}
                  photoUrl={item.photoUrl}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  username={item.username}
                  points={item.points}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default RankingPage
