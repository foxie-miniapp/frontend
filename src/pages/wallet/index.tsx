import { IoChevronForward } from 'react-icons/io5'

const WalletPage = () => {
  return (
    <div className="flex h-full w-full flex-col px-4 py-6 gap-6">
      <div className="flex flex-col items-center gap-6">
        <div className="h-[160px] w-[160px]">
          <img
            src="/images/wallet.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className=" text-[32px] font-semibold text-[#FFDB6F]">
            Foxie’s Ton Wallet
          </h1>
          <p className="text-[14px] font-normal text-[#FFF9E599]">
            Connect your Ton wallet to unlock future rewards! 🦊🔑
          </p>
        </div>
      </div>

      <button className="flex flex-row items-center gap-3 rounded-[16px] bg-[linear-gradient(0deg,rgba(241,236,212,0.08),rgba(241,236,212,0.08)),linear-gradient(90deg,rgba(254,228,90,0.2)_0%,rgba(254,228,90,0)_100%);] px-2 py-4 ">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <img
            src="/icons/ton.svg"
            alt="ton"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="flex-1 text-start text-[16px] font-semibold text-[#FFB625]">
          Connect your TON Wallet
        </p>

        <IoChevronForward className="text-white/50" size={24} />
      </button>
    </div>
  )
}

export default WalletPage
