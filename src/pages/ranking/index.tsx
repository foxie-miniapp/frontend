import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

import RankingItem from '@/components/ranking/ranking-item'
import TaskSkeletonLoader from '@/components/task/task-skeleton'
import { QUERY_KEYS } from '@/lib/constants/query-key'
import { getLeaderboard } from '@/services/user'

const RankingPage = () => {
  const LIMIT = 10
  const observerTarget = useRef(null)

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.USER.LEADERBOARD],
      queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
        getLeaderboard(pageParam, LIMIT),
      getNextPageParam: (lastPage: {
        pagination: { currentPage: number; totalPages: number }
      }) => {
        const { currentPage, totalPages } = lastPage.pagination
        return currentPage < totalPages ? currentPage + 1 : undefined
      },
      initialPageParam: 1
    })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

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
            data?.pages.flatMap((page, pageIndex) =>
              page.data.map((item, index) => (
                <RankingItem
                  key={item._id}
                  rank={pageIndex * LIMIT + index + 1}
                  username={item.username}
                  points={item.points}
                  isMe={item._id === page.user._id}
                  isTop1={pageIndex === 0 && index === 0}
                />
              ))
            )
          )}
          {isFetchingNextPage && <TaskSkeletonLoader />}
          <div ref={observerTarget} style={{ height: '1px' }} />
        </div>
      </div>
    </div>
  )
}

export default RankingPage
