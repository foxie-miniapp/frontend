import { useMutation } from '@tanstack/react-query'

import { completeQuest } from '@/services/quest'
import useQuest, { QuestStatus, QuestType } from '@/store/quest.store'

type CompleteButtonProps = {
  questId: string
  questType: QuestType
  url?: string
}

const CompleteButton = (props: CompleteButtonProps) => {
  const { questId, questType, url } = props

  const updateQuestStatus = useQuest((state) => state.updateQuestStatus)
  const { mutate: _completeQuest } = useMutation({
    mutationFn: (questId: string) => completeQuest(questId),
    onSuccess: () => {
      updateQuestStatus(questId, QuestStatus.COMPLETED)
      // toast.success('Quest claimed   ');
    },
    onError: () => {
      // toast.error('Failed to claim');
    }
  })

  const onCompleteQuest = () => {
    if (questType === QuestType.LINK) {
      window.open(url, '_blank')
      _completeQuest(questId)
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

export default CompleteButton
