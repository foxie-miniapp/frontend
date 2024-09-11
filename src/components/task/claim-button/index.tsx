import { useMutation } from '@tanstack/react-query'

import { claimQuest } from '@/services/quest'
import useQuest, { QuestStatus } from '@/store/quest.store'
import useUser from '@/store/user.store'

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
      className="task-claim-btn h-[36px] rounded-full px-6 py-1 text-sm font-medium text-[#FFF1C4] transition-all duration-300 ease-in-out hover:bg-white/20"
      onClick={onClaimQuest}
    >
      Claim
    </button>
  )
}

export default ClaimButton
