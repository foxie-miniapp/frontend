import { useMutation } from '@tanstack/react-query'

import { CompleteQuestPayload } from '@/lib/types/quest-action'
import { completeQuest } from '@/services/quest'
import useQuest, { QuestStatus, QuestType } from '@/store/quest.store'

import LinkButton from './link-button'
import SendButton from './send-button'

type CompleteButtonProps = {
  questId: string
  questType: QuestType
  url?: string
}

const CompleteButton = (props: CompleteButtonProps) => {
  const { questId, questType, url } = props

  const updateQuestStatus = useQuest((state) => state.updateQuestStatus)
  const { mutate: _completeQuest } = useMutation({
    mutationFn: (data: CompleteQuestPayload) => completeQuest(data),
    onSuccess: () => {
      updateQuestStatus(questId, QuestStatus.COMPLETED)
      // toast.success('Quest claimed   ');
    },
    onError: () => {
      // toast.error('Failed to claim');
    }
  })

  return (
    <>
      {questType === QuestType.LINK && url && (
        <LinkButton
          callCompleteQuest={() => {
            _completeQuest({
              questId
            })
          }}
          questUrl={url}
        />
      )}
      {questType === QuestType.ON_CHAIN && (
        <SendButton callCompleteQuest={_completeQuest} questId={questId} />
      )}
    </>
  )
}

export default CompleteButton
