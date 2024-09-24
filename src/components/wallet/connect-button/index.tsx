import { useMutation } from '@tanstack/react-query'
import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI
} from '@tonconnect/ui-react'
import { useEffect } from 'react'
import { IoChevronForward } from 'react-icons/io5'

import { truncateAddress } from '@/lib/utils/string'
import { updateWalletAddress } from '@/services/user'
import useUser from '@/store/user.store'

const ConnectWallet = () => {
  const { userAddress, updateAddress } = useUser((state) => ({
    userAddress: state.user?.walletAddress,
    updateAddress: state.updateWalletAddress
  }))
  const { mutate: _update } = useMutation({
    mutationFn: (address: string) => updateWalletAddress(address),
    onSuccess: () => {
      updateAddress(address)
    }
  })
  const { open } = useTonConnectModal()
  const address = useTonAddress()
  const [tonWallet] = useTonConnectUI()

  const handleConnect = () => {
    open()
  }

  useEffect(() => {
    if (!userAddress && userAddress !== address && address) {
      _update(address)
    }
  }, [_update, address, userAddress])

  if (address) {
    return (
      <>
        <div className="flex flex-row items-center gap-3 rounded-[16px] bg-[linear-gradient(0deg,rgba(241,236,212,0.08),rgba(241,236,212,0.08)),linear-gradient(90deg,rgba(254,228,90,0.2)_0%,rgba(254,228,90,0)_100%);] px-2 py-4 ">
          <p className="flex-1 pl-2 text-start text-[16px] font-semibold text-[#FFB625]">
            {truncateAddress(address)}
          </p>
          <button
            className="task-claim-btn h-[36px] rounded-full px-6 py-1 text-sm font-medium text-[#FFF1C4] transition-all duration-300 ease-in-out hover:bg-white/20"
            onClick={() => tonWallet.disconnect()}
          >
            Disconnect
          </button>
        </div>
      </>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="flex flex-row items-center gap-3 rounded-[16px] bg-[linear-gradient(0deg,rgba(241,236,212,0.08),rgba(241,236,212,0.08)),linear-gradient(90deg,rgba(254,228,90,0.2)_0%,rgba(254,228,90,0)_100%);] px-2 py-4 "
    >
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <img
          src="/icons/ton.svg"
          alt="ton"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="flex-1 text-start text-[16px] font-semibold text-[#FFB625]">
        Connect your TON Wallet
      </p>

      <IoChevronForward className="text-white/50" size={24} />
    </button>
  )
}

export default ConnectWallet
