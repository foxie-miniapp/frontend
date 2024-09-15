import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export enum QuestLogo {
  X = 'x',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  TELEGRAM = 'telegram',
  DISCORD = 'discord',
  TON = 'ton'
}

export enum QuestType {
  LINK = 'link',
  JOIN_GROUP_TELEGRAM = 'join_group_telegram',
  ON_CHAIN = 'on_chain'
}

export enum QuestStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CLAIMED = 'claimed'
}

export type Quest = {
  _id: string
  title: string
  description: string
  pointsReward: number
  isActive: boolean
  url?: string
  logo?: QuestLogo
  type: QuestType
  createdAt: string
  updatedAt: string
  status: QuestStatus
}

type QuestStoreState = {
  quests: Quest[]
}

type QuestStoreAction = {
  reset: () => void
  setQuests: (quests: Quest[]) => void
  updateQuestStatus: (questId: string, status: QuestStatus) => void
}

const initialState: QuestStoreState = {
  quests: []
}

const useQuest = create<
  QuestStoreState & QuestStoreAction,
  [['zustand/immer', never]]
>(
  immer((set) => ({
    ...initialState,
    reset: () =>
      set((state) => {
        state.quests = []
      }),

    setQuests: (quests) =>
      set((state) => {
        state.quests = quests
      }),

    updateQuestStatus: (questId, status) =>
      set((state) => {
        state.quests = state.quests.map((quest) =>
          quest._id === questId ? { ...quest, status } : quest
        )
      })
  }))
)

export default useQuest
