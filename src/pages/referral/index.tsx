import { GoLink } from 'react-icons/go'

import ButtonClaim from '@/components/commons/button_claim'
import FriendList from '@/components/referral/friend_invite'

const ReferralPage = () => {
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
        You invited people <p className="font-semibold text-[#FFB625]">3</p>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-y-scroll ">
        <FriendList /> <FriendList /> <FriendList /> <FriendList />
      </div>
      <div className="flex w-full flex-row gap-2">
        <ButtonClaim
          title="Invite friends"
          onClick={() => {
            console.log('this is temp')
          }}
        />

        <button className=" flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%);]">
          <GoLink size={24} />
        </button>
      </div>
    </div>
  )
}

export default ReferralPage
