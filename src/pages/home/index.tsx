import ButtonClaim from '@/components/commons/button_claim'
import { useAuth } from '@/hooks/useAuth'
import { BsLightningCharge } from 'react-icons/bs'

const HomePage = () => {
  const { userData } = useAuth()
  const progess = 65
  return (
    <div className="flex h-full flex-col justify-between py-6">
      <div className="flex flex-col gap-2 px-5">
        <div className="flex flex-row items-center justify-between gap-2 rounded-xl border p-[12px_16px_12px_12px]">
          <div className="h-8 w-8 overflow-hidden rounded-full border bg-[#F9EED8]">
            <img
              src="/images/fox_avatar.png"
              className="h-full w-full object-cover"
              alt="foxie"
            />
          </div>
          <div className="w-full flex-1 text-base font-semibold text-white">
            {userData?.user.username}
          </div>

          <h3 className="text-[16px] font-semibold text-[#FEE45A]">Level 17</h3>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1 font-bold text-white">
            <BsLightningCharge className="text-yellow-500" /> 800/1700
          </div>

          <div className="h-2 w-full overflow-hidden rounded-lg bg-white/10 ">
            <div
              className={`h-full  rounded-lg bg-[#FEB86C]`}
              style={{ width: `${progess}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border-[6px] border-[#FFB720]">
        <div className="relative h-[168px] w-[165px] overflow-hidden">
          <img
            src="/images/fox_center.svg"
            alt="fox"
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-1">
        <h1 className="text-[40px] font-bold leading-[40px] text-yellow-600">
          999,999
        </h1>

        <div className="flex flex-row items-center gap-1 text-[16px] font-bold text-yellow-300">
          <div className="h-6 w-6">
            <img
              src="/icons/logo.svg"
              className="h-full w-full object-cover"
              alt="logo"
            />
          </div>
          $FOXIE
        </div>
      </div>

      <div className="h-[52px] w-full px-5">
        <ButtonClaim title="Claim Rewards" onClick={() => {}} />
      </div>
    </div>
  )
}

export default HomePage
