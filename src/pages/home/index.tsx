import ButtonClaim from '@/components/commons/button_claim'
import { useAuth } from '@/hooks/useAuth'

const HomePage = () => {
  const { userData } = useAuth()
  const progress = 65

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="grow overflow-x-hidden">
        <div className="absolute left-1/2 top-0 z-0 h-[310.28px] w-full max-w-[535.812px] -translate-x-1/2 -translate-y-1/2 rounded-[535.812px] bg-[#C33D00] blur-[100px]"></div>
        <img
          src="/images/preloader/bg.png"
          alt="Group_1"
          className="absolute inset-0 z-0 h-full w-full object-cover mix-blend-soft-light"
        />
        <div className="relative z-10 flex w-full flex-col gap-8 py-6">
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row items-center justify-between gap-2 rounded-xl border p-[12px_16px_12px_12px]">
              <div className="h-8 w-8 overflow-hidden rounded-full border bg-[#F9EED8]">
                <img
                  src="/images/fox_avatar.png"
                  className="h-full w-full object-cover"
                  alt="foxie"
                />
              </div>
              <div className="flex-1 truncate text-base font-medium text-white">
                {userData?.user.username || 'hello'}
              </div>
              <h3 className="whitespace-nowrap text-[16px] font-medium text-[#FEE45A]">
                Level 17
              </h3>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-1 font-medium text-white">
                ⚡️800/1700
              </div>
              <div className="h-2 w-full overflow-hidden rounded-lg bg-white/10 ">
                <div
                  className="h-2 rounded-lg bg-[#FEB86C]"
                  style={{ width: `${progress}%` }}
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
        </div>
      </div>

      <div className="sticky bottom-[32px] z-10 h-[52px] w-full bg-black px-5 pt-2">
        <ButtonClaim
          className="text-[18px] font-semibold"
          title="Claim Rewards"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default HomePage
