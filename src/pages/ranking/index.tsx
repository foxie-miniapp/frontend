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
