import { create } from 'zustand'

interface AuthState {
  isAuth: boolean
  setAuth: (isAuth: boolean) => void
}

export const useAuth = create<AuthState>((set) => ({
  isAuth: false,
  setAuth: (isAuth: boolean) => set({ isAuth })
}))
