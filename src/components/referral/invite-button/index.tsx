import WebApp from '@twa-dev/sdk'
import { GoLink } from 'react-icons/go'

import ButtonClaim from '@/components/commons/button_claim'
import { appConfigs } from '@/config/app-config'
import useUser from '@/store/user.store'

const InviteButton = () => {
  const referralCode = useUser((state) => state.user?.referralCode)

  const handleCopyReferralLink = () => {
    const referralLink = `${appConfigs.telegramAppUrl}/${appConfigs.telegramAppName}?startapp=${referralCode}`

    navigator.clipboard.writeText(referralLink).then(
      () => {
        // Show a popup to confirm the link was copied
      },
      (err) => {
        console.error('Could not copy text: ', err)
      }
    )
  }

  const handleShareReferralLink = () => {
    // Check if the web app is ready
    if (WebApp) {
      const inviteLink = `${appConfigs.telegramAppUrl}/${appConfigs.telegramAppName}?startapp=${referralCode}`

      // You can customize this invite text
      const inviteText = `Join me on Foxie and let's earn together! Use my invite link to join the fun. 🌟`

      // Construct the sharing URL
      const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(
        inviteLink
      )}&text=${encodeURIComponent(inviteText)}`

      // Open the sharing dialog
      WebApp.openTelegramLink(shareUrl)
    } else {
      console.error('Telegram WebApp is not initialized')
    }
  }

  return (
    <div className="flex w-full flex-row gap-2">
      <ButtonClaim
        title="Invite friends"
        className="claim-button"
        onClick={handleShareReferralLink}
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
