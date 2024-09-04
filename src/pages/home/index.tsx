const HomePage = () => {
  const progess = 65
  return (
    <div className="flex h-full flex-col items-center justify-between px-2 py-4 text-white">
      <div className="flex w-full flex-col items-end gap-1">
        <div className="flex w-full flex-row items-center justify-between px-2 ">
          <div className="flex flex-row items-center gap-1">
            <div className="h-[48px] w-[48px] rounded-full bg-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpGKwDtwKnC55GHET0vagaLSHePZIPhKJgQ&s"
                alt="avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className=" text-xl font-bold">@frey</p>
          </div>
          <h2 className=" text-xl font-bold text-white">
            1250 <span className=" text-white/50">$foxie</span>
          </h2>
        </div>
        <button className="rounded-xl bg-white px-3 py-1 font-bold text-black">
          Claim Rewards
        </button>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-[250px] w-[250px]">
          <img
            src="/public/images/demo.gif"
            alt="fox"
            className="h-full w-full object-contain"
          />
        </div>

        <p className=" font-semibold">foxiename</p>
      </div>
      <div className="flex w-full flex-row items-center gap-2 px-2">
        <p className=" whitespace-nowrap text-sm font-bold">LV 17</p>
        <div className="w-full overflow-hidden rounded-md border bg-transparent">
          <div
            className=" bg-white p-1 text-center text-sm font-medium leading-none text-black"
            style={{ width: `${progess}%` }}
          >
            {progess}%
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
