import { CHAIN, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
import { useNavigate } from 'react-router-dom'

import { useTonTransaction } from '@/hooks/use-ton-transaction'
import { CompleteQuestPayload } from '@/lib/types/quest-action'

type SendButtonProps = {
  callCompleteQuest: (data: CompleteQuestPayload) => void
  questId: string
}

const SendButton = (props: SendButtonProps) => {
  const { callCompleteQuest, questId } = props
  const navigate = useNavigate()
  const [tonConnectUt] = useTonConnectUI()
  //   const { sendTransaction } = useTonTransaction()
  const address = useTonAddress()

  const onCompleteQuest = async () => {
    if (!address) {
      navigate('/wallet')
      return
    }

    try {
      const tx = await tonConnectUt.sendTransaction({
        validUntil: Math.floor(Date.now() / 1000) + 600,
        messages: [
          {
            address: 'EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M',
            amount: '5000000'
          }
        ]
      })

      console.log('tx', tx)

      if (tx) {
        callCompleteQuest({ questId, txh: tx.boc })
      }
    } catch (error) {
      console.error('Failed to send transaction', error)
    }
  }

  return (
    <button
      className="text-[#FFF1C4] transition-all duration-300 ease-in-out hover:scale-110"
      onClick={onCompleteQuest}
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

export default SendButton
