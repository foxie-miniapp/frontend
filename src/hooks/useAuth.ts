import { create } from 'zustand'

import { WebAppParams } from './../../types/dataType'

interface AuthState {
  isAuth: boolean
  setAuth: (isAuth: boolean) => void
  userData?: WebAppParams
  setUserData: (userData: WebAppParams) => void
}

export const useAuth = create<AuthState>((set) => ({
  isAuth: false,
  setAuth: (isAuth: boolean) => set({ isAuth }),
  userData: undefined,
  setUserData: (userData: WebAppParams) => set({ userData })
}))
