import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import MainLayout from './components/layout'
import Preloader from './components/preloader'
import HomePage from './pages/home'
import ReferralPage from './pages/referral'
import TaskPage from './pages/task'
import WalletPage from './pages/wallet'
import { useMutation } from '@tanstack/react-query'
import { UserLoginPayload } from './lib/types/user-action'
import { login } from './services/user'
import { setStorageData } from './lib/helpers/storage'
import { StorageKey } from './lib/constants/storage'
import useUser from './store/user.store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const { user, setUser, isLoading, setLoading } = useUser((state) => ({
    user: state.user,
    isLoading: state.isLoadUser,
    setUser: state.setProfile,
    setLoading: state.setLoadUser
  }))

  const { mutate: _login } = useMutation({
    mutationFn: (data: UserLoginPayload) => login(data),
    onSuccess: (data) => {
      setStorageData(StorageKey.ACCESS_TOKEN, data.token.accessToken)
      setUser(data.user)
      setLoading(false)
    }
  })

  useEffect(() => {
    console.log({
      webApp: WebApp.initDataUnsafe,
      user: user,
      appUrl: WebApp.initDataUnsafe.start_param
    })
    if (!user) {
      _login({
        username: WebApp.initDataUnsafe.user?.username || '',
        telegramId: WebApp.initDataUnsafe.user?.id.toString() || '',
        hash: WebApp.initDataUnsafe.hash || '',
        initData: WebApp.initData,
        authDate: WebApp.initDataUnsafe.auth_date || '',
        ...(WebApp.initDataUnsafe.user?.first_name && {
          firstName: WebApp.initDataUnsafe.user?.first_name
        }),
        ...(WebApp.initDataUnsafe.user?.last_name && {
          lastName: WebApp.initDataUnsafe.user?.last_name
        }),
        ...(WebApp.initDataUnsafe.user?.photo_url && {
          photoUrl: WebApp.initDataUnsafe.user?.photo_url
        }),
        ...(WebApp.initDataUnsafe.start_param && {
          code: WebApp.initDataUnsafe.start_param
        })
      })
    }
  }, [WebApp])

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="task" element={<TaskPage />} />
              <Route path="referral" element={<ReferralPage />} />
              <Route path="wallet" element={<WalletPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
