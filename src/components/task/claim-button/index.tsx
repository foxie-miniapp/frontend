import { claimQuest } from '@/services/quest'
import useQuest, { QuestStatus } from '@/store/quest.store'
import useUser from '@/store/user.store'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

type ClaimButtonProps = {
  questId: string
  point: number
}

const ClaimButton = (props: ClaimButtonProps) => {
  const { questId, point } = props
  const addPoint = useUser((state) => state.addPoint)
  const updateQuestStatus = useQuest((state) => state.updateQuestStatus)
  const { mutate: _claimQuest } = useMutation({
    mutationFn: (questId: string) => claimQuest(questId),
    onSuccess: () => {
      updateQuestStatus(questId, QuestStatus.CLAIMED)
      addPoint(point)
      // toast.success('Quest claimed   ');
    },
    onError: () => {
      // toast.error('Failed to claim');
    }
  })

  const onClaimQuest = () => {
    _claimQuest(questId)
  }

  return (
    <button
      className="rounded-full bg-white/10 px-6 py-1 font-medium text-white"
      onClick={onClaimQuest}
    >
      Claim
    </button>
  )
}

export default ClaimButton
