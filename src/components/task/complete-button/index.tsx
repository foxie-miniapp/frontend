import { completeQuest } from '@/services/quest'
import useQuest, { QuestStatus, QuestType } from '@/store/quest.store'
import { useMutation } from '@tanstack/react-query'
import React from 'react'

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
    <button className="text-white" onClick={onCompleteQuest}>
      Complete
    </button>
  )
}

export default CompleteButton
