import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type User = {
  _id: string
  telegramId: string
  username: string
  points: number
  referralCode: string
  exp: number
  numberOfFoods: number
}

type UserStoreState = {
  user: User | null
  isLoadUser: boolean
}

type UserStoreAction = {
  reset: () => void
  setProfile: (profile: User) => void
  setLoadUser: (isLoadUser: boolean) => void
  updatePoint: (point: number) => void
  addPoint: (point: number) => void
}

const initialState: UserStoreState = {
  user: null,
  isLoadUser: true
}

const useUser = create<
  UserStoreState & UserStoreAction,
  [['zustand/immer', never]]
>(
  immer((set) => ({
    ...initialState,
    reset: () =>
      set((state) => {
        state.user = null
      }),

    setLoadUser: (isLoadUser: boolean) =>
      set((state) => {
        state.isLoadUser = isLoadUser
      }),

    setProfile: (profile) =>
      set((state) => {
        state.user = profile
      }),

    updatePoint: (point) =>
      set((state) => {
        if (state.user) {
          state.user.points = point
        }
      }),

    addPoint: (point) =>
      set((state) => {
        if (state.user) {
          state.user.points = state.user.points + point
        }
      })
  }))
)

export default useUser
