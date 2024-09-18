import { useMutation } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { Buffer } from 'buffer'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout'
import Preloader from './components/preloader'
import { StorageKey } from './lib/constants/storage'
import { setStorageData } from './lib/helpers/storage'
import { UserLoginPayload } from './lib/types/user-action'
import HomePage from './pages/home'
import RankingPage from './pages/ranking'
import ReferralPage from './pages/referral'
import TaskPage from './pages/task'
import WalletPage from './pages/wallet'
import { login } from './services/user'
import useUser from './store/user.store'

if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

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
    },
    onSettled: () => {
      setLoading(false)
    }
  })

  useEffect(() => {
    if (!user && WebApp.initDataUnsafe.user && WebApp.initData) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Route path="ranking" element={<RankingPage />} />
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
