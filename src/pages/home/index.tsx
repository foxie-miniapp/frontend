import ButtonClaim from '@/components/commons/button_claim'
import { localeNumber } from '@/lib/utils/number'
import useUser from '@/store/user.store'

const HomePage = () => {
  const user = useUser((state) => state.user)
  const progress = 65

  console.log('user', user)
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="grow overflow-hidden">
        <div className="absolute left-1/2 top-0 z-0 h-[310.28px] w-full max-w-[535.812px] -translate-x-1/2 -translate-y-1/2 rounded-[535.812px] bg-[#C33D00] blur-[100px]"></div>
        <img
          src="/images/preloader/bg.png"
          alt="Group_1"
          className="mix-blend-soft-light-override absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex w-full flex-col gap-8 py-6">
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row items-center justify-between gap-2 rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] p-[12px_16px_12px_12px] bg-blend-color-dodge backdrop-blur-[10px]">
              <div className="h-8 w-8 overflow-hidden rounded-full border bg-[#F9EED8]">
                <img
                  src="/images/fox_avatar.png"
                  className="h-full w-full object-cover"
                  alt="foxie"
                />
              </div>
              <div className="flex-1 truncate text-base font-medium text-[#FFF1C4]">
                {user?.username}
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
                  className="h-2 rounded-lg bg-[linear-gradient(90deg,#E75400_0%,#FFBC3D_100%)] shadow-[0px_-1px_1px_0px_#FEB86C_inset]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pet-circle floating-element relative z-10 mx-auto flex h-[280px] w-[280px] items-center justify-center rounded-full">
            <video
              src="/images/home/fire.mp4"
              loop
              muted
              autoPlay
              preload="true"
              className="mix-blend-lighten-override absolute inset-0 z-0 h-full w-full translate-y-1/2 object-cover"
              playsInline
            />
            <div className="pet-light absolute bottom-0 left-1/2 z-10 -translate-x-1/2"></div>
            <div className="relative z-10 h-[168px] w-[165px] overflow-hidden">
              <img
                src="/images/home/fox_center.svg"
                alt="fox"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="relative z-20 flex w-full flex-col items-center gap-1">
            <h1 className="token-text text-[40px] font-bold">
              {localeNumber(Number(user?.points))}
            </h1>
            <div className="flex flex-row items-center gap-1 text-[12px] font-medium text-yellow-300">
              <img src="/icons/logo.svg" className="h-4 w-4" alt="logo" />
              $FOXIE
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-10  w-full bg-black px-5 pb-8 pt-2">
        <ButtonClaim
          className="claim-button text-[18px] font-semibold"
          title="Claim Rewards"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {
            console.log('this is temp')
          }}
        />
      </div>
    </div>
  )
}

export default HomePage
