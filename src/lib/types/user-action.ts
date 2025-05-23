import { User } from '@/store/user.store'

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

export type ReferentsResponse = Referent[]

export type LeaderboardResponse = {
  data: {
    _id: string
    username: string
    points: number
    photoUrl?: string
    firstName?: string
    lastName?: string
  }[]
  total: number
  user: {
    _id: string
    username: string
    points: number
    rank: number
    photoUrl?: string
    firstName?: string
    lastName?: string
  }
}
