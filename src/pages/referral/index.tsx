import { useQuery } from '@tanstack/react-query'

import FriendList from '@/components/referral/friend_invite'
import InviteButton from '@/components/referral/invite-button'
import { QUERY_KEYS } from '@/lib/constants/query-key'
import { getReferents } from '@/services/user'

const ReferralPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.USER.REFERENTS],
    queryFn: getReferents
  })

  return (
    <div className="relative flex h-full w-full flex-col justify-between gap-6 bg-[#0F010B] px-5 pt-4">
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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6">
          <div className="group relative inline-flex h-[160px]  w-[160px]   flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="431"
              height="280"
              viewBox="0 0 431 280"
              fill="none"
              className="absolute inset-x-[-127px] fill-[#FFCD5D] opacity-70 blur-[50px]"
            >
              <g opacity="0.7" filter="url(#filter0_f_2066_1004)">
                <ellipse
                  cx="215.5"
                  cy="140"
                  rx="115.5"
                  ry="40"
                  fill="#FFCD5D"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_2066_1004"
                  x="0"
                  y="0"
                  width="431"
                  height="280"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="50"
                    result="effect1_foregroundBlur_2066_1004"
                  />
                </filter>
              </defs>
            </svg>
            <img
              src="/images/referral.png"
              alt=""
              className="relative h-full w-full object-cover"
            />
          </div>

          <div className="z-10 flex flex-col items-center gap-2 text-center">
            <h1 className=" token-text text-[32px] font-semibold">
              Friends Bonus!{' '}
            </h1>
            <p className="text-[14px] font-normal text-[#FFF9E599]">
              Invite your friends and get more FOXIE 🦊🎁 🦊✨
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between rounded-[12px] bg-[#F1ECD414] p-3 text-[14px] text-[#FFF1C4]">
          You invited people{' '}
          <p className="font-semibold text-[#FFB625]">
            {data?.pagination.totalItems || 0}
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.data?.map((friend) => (
              <FriendList
                key={friend._id}
                name={friend.username}
                point={friend.points}
                photoUrl={friend.photoUrl}
              />
            ))
          )}
        </div>
      </div>
      <div className="sticky bottom-0 z-10 flex  w-full flex-row items-center gap-2 bg-[#0F010B] pb-8 pt-2">
        <InviteButton />
      </div>
    </div>
  )
}

export default ReferralPage
