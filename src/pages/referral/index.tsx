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
    <div className="flex h-full w-full flex-col justify-between gap-6 bg-[#0F010B] px-5 py-4">
      <div className="flex flex-col items-center gap-6">
        <div className="h-[160px] w-[160px]">
          <img
            src="/images/friend_bonus.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className=" text-[32px] font-semibold text-[#FFDB6F]">
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
          {data?.pagination.totalItems}
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
      <InviteButton />
    </div>
  )
}

export default ReferralPage
