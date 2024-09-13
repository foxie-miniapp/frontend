import {
  useTonAddress,
  useTonConnectModal,
  useTonConnectUI
} from '@tonconnect/ui-react'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

import { useTonBalance } from '@/hooks/use-balance'
import { truncateAddress } from '@/lib/utils/string'

const ConnectWallet = () => {
  const { open } = useTonConnectModal()
  const address = useTonAddress()
  const [tonWallet] = useTonConnectUI()
  const { balance } = useTonBalance()

  const handleConnect = () => {
    open()
  }

  if (address) {
    return (
      <>
        <div className="flex flex-row items-center gap-3 rounded-[16px] bg-[linear-gradient(0deg,rgba(241,236,212,0.08),rgba(241,236,212,0.08)),linear-gradient(90deg,rgba(254,228,90,0.2)_0%,rgba(254,228,90,0)_100%);] px-2 py-4 ">
          <p className="flex-1 text-start text-[16px] font-semibold text-[#FFB625]">
            {truncateAddress(address)}
          </p>
          <button className="text-white" onClick={() => tonWallet.disconnect()}>
            Disconnect
          </button>
        </div>
        <div className="text-white">Balance: {balance}</div>
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
