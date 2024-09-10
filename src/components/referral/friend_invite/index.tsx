const FriendList = () => {
  return (
    <div className="flex flex-row items-center gap-3 rounded-[16px] bg-[#F1ECD414] p-3">
      <div className="h-10 w-10 overflow-hidden rounded-full border border-[#AE9955]">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
          alt="avt"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-[14px] text-[#FFF1C4]">Frey</p>
        <div className="flex flex-row items-center gap-1 text-[14px] font-bold text-yellow-300">
          <div className="h-4 w-4">
            <img
              src="/icons/logo.svg"
              className="h-full w-full object-cover"
              alt="logo"
            />
          </div>
          5000
        </div>
      </div>

      <button className="rounded-full bg-[#FFFFFF1F] px-6 py-2 text-white">
        Claim
      </button>
    </div>
  )
}

export default FriendList
