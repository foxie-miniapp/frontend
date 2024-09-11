import { User } from '@/store/user.store'

import { Pagination } from './common'

export type UserLoginPayload = {
  initData: string
  telegramId: string | number
  hash: string
  username: string
  authDate: string | number
  firstName?: string
  lastName?: string
  photoUrl?: string
  code?: string
}

export type UserLoginResponse = {
  user: User
  token: {
    accessToken: string
  }
  firstLogin: boolean
}

export type Referent = {
  _id: string
  username: string
  points: number
  photoUrl?: string
}

export type ReferentsResponse = {
  data: Referent[]
  pagination: Pagination
}
