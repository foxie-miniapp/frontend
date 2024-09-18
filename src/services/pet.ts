import axiosClient from '@/lib/client/axios-client'

export const feedPet = async () => {
  const res = await axiosClient.post('/pet/feed')
  return res.data
}
