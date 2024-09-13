const TaskSkeletonLoader = () => {
  return (
    <div className="flex max-h-[68px] w-full animate-pulse flex-row items-center justify-between gap-3 rounded-[16px] bg-[rgba(241,236,212,0.08)] p-3">
      <div className="flex flex-row items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-gray-600"></div>
        <div className="flex flex-col items-start gap-1">
          <div className="h-4 w-32 rounded bg-gray-600"></div>
          <div className="flex flex-row items-center gap-1">
            <div className="h-4 w-4 rounded bg-gray-600"></div>
            <div className="h-4 w-16 rounded bg-gray-600"></div>
          </div>
        </div>
      </div>
      <div className="h-8 w-16 rounded-xl bg-gray-600"></div>
    </div>
  )
}

export default TaskSkeletonLoader
