import axiosClient from '@/lib/client/axios-client'
import {
  ReferentsResponse,
  UserLoginPayload,
  UserLoginResponse
} from '@/lib/types/user-action'

export const login = async (data: UserLoginPayload) => {
  const res = await axiosClient.post('/auth/login', data)
  return res.data as UserLoginResponse
}

export const getReferents = async () => {
  const res = await axiosClient.get('users/referents')
  return res.data as ReferentsResponse
}

export const updateWalletAddress = async (address: string) => {
  const res = await axiosClient.put('/users/address', {
    walletAddress: address
  })
  return res.data
}
