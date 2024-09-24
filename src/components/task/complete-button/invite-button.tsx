import WebApp from '@twa-dev/sdk'

import { appConfigs } from '@/config/app-config'
import useUser from '@/store/user.store'

const InviteButton = () => {
  const referralCode = useUser((state) => state.user?.referralCode)
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
    <button
      className="text-[#FFF1C4] transition-all duration-300 ease-in-out hover:scale-110"
      onClick={handleShareReferralLink}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 ease-in-out hover:translate-x-1"
      >
        <path
          d="M10 17L15 12L10 7"
          stroke="#FFF1C4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default InviteButton
