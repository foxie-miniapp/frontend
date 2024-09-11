import axiosClient from '@/lib/client/axios-client'
import { Quest } from '@/store/quest.store'

export const getQuests = async () => {
  const res = await axiosClient.get(`/quest`)
  return res.data as Quest[]
}

export const completeQuest = async (questId: string) => {
  const res = await axiosClient.post(`/quest/${questId}/complete`)
  return res.data
}

export const claimQuest = async (questId: string) => {
  const res = await axiosClient.post(`/quest/${questId}/claim`)
  return res.data
}
