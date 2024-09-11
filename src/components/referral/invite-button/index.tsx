import { GoLink } from 'react-icons/go'

import ButtonClaim from '@/components/commons/button_claim'
import { appConfigs } from '@/config/app-config'
import useUser from '@/store/user.store'

const InviteButton = () => {
  const referralCode = useUser((state) => state.user?.referralCode)

  const handleCopyReferralLink = () => {
    const referralLink = `${appConfigs.telegramAppUrl}?startapp=${referralCode}`

    navigator.clipboard.writeText(referralLink).then(
      () => {
        // Show a popup to confirm the link was copied
      },
      (err) => {
        console.error('Could not copy text: ', err)
      }
    )
  }

  return (
    <div className="flex w-full flex-row gap-2">
      <ButtonClaim
        title="Invite friends"
        className="claim-button"
        onClick={() => {
          console.log('this is temp')
        }}
      />

      <button
        className=" flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[linear-gradient(140.91deg,#FFF1C4_9.31%,#FEAD1B_83.97%);]"
        onClick={handleCopyReferralLink}
      >
        <GoLink size={24} />
      </button>
    </div>
  )
}

export default InviteButton
