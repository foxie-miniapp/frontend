import { useMutation } from '@tanstack/react-query'

import ButtonClaim from '@/components/commons/button_claim'
import { earnExp, expToLevel, levelToExp } from '@/lib/levels'
import { localeNumber } from '@/lib/utils/number'
import { feedPet } from '@/services/pet'
import useUser from '@/store/user.store'

const HomePage = () => {
  const user = useUser((state) => state.user)

  const { addExp } = useUser((state) => ({
    addExp: state.addExp
  }))

  const { mutate: _update } = useMutation({
    mutationFn: () => feedPet(),

    onSuccess: () => {
      addExp(earnExp(user!.exp))
    }
  })
  if (!user) return null

  const currentLevel = expToLevel(user.exp)

  const baseExp = currentLevel > 1 ? levelToExp(currentLevel - 1) + 1 : 0
  const nextLevelExp = levelToExp(currentLevel) + 1

  const progress = ((user.exp - baseExp) / (nextLevelExp - baseExp)) * 100

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <div className="relative grow overflow-hidden">
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
                Level {currentLevel}
              </h3>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-1 font-medium text-white">
                {user.exp - baseExp}/{nextLevelExp - baseExp}
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
        <button
          className="absolute right-5 top-[150px] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(90deg,#FEE45A_10.86%,#FEA613_101.85%)] transition-transform duration-300 ease-in-out active:rotate-12 active:scale-110"
          onClick={() => _update()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.164795"
              width="44"
              height="44"
              rx="22"
              fill="url(#paint0_linear_186_2428)"
            />
            <path
              d="M34.6135 31.1159L24.5923 21.0946L12.8842 9.38651H11.9692L11.7824 9.86125C11.2893 11.1143 11.0786 12.3959 11.1732 13.5674C11.281 14.9027 11.7883 16.0588 12.6403 16.9108L21.7803 26.0508L22.9858 24.8452L31.4357 34.2938C32.2763 35.1344 33.723 35.1843 34.6135 34.2938C35.4897 33.4176 35.4897 31.992 34.6135 31.1159Z"
              fill="#851B1F"
            />
            <path
              d="M17.5448 23.9338L10.3864 31.0922C9.51028 31.9683 9.51028 33.394 10.3864 34.2701C11.2187 35.1024 12.6585 35.1758 13.5642 34.2701L20.7227 27.1116L17.5448 23.9338Z"
              fill="#851B1F"
            />
            <path
              d="M34.1928 13.6417L30.1322 17.7023L29.0728 16.643L33.1335 12.5824L32.0742 11.5231L28.0136 15.5837L26.9543 14.5244L31.0149 10.4638L29.9557 9.40454L24.6592 14.701C24.0112 15.349 23.6243 16.2093 23.5696 17.1237C23.5558 17.3553 23.5033 17.5832 23.4162 17.7999L26.8568 21.2405C27.0735 21.1533 27.3014 21.1009 27.533 21.087C28.4474 21.0325 29.3077 20.6455 29.9557 19.9975L35.2522 14.7011L34.1928 13.6417Z"
              fill="#851B1F"
            />
            <defs>
              <linearGradient
                id="paint0_linear_186_2428"
                x1="44.5761"
                y1="22.1623"
                x2="-1.83021"
                y2="22.1623"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEE45A" />
                <stop offset="1" stopColor="#FEA613" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>

      <div className="sticky bottom-0 z-10  flex w-full flex-col items-center gap-4 bg-black px-5 pb-8 pt-2">
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
