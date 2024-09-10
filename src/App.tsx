import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import TaskPage from './pages/task'
import ReferralPage from './pages/referral'
import WalletPage from './pages/wallet'
import MainLayout from './components/layout'
import { useAuth } from './hooks/useAuth'
import { useEffect } from 'react'
import { User, WebAppParams } from '../types/dataType'
import WebApp from '@twa-dev/sdk'

const App = () => {
  const decodeQueryString = (queryString: string): WebAppParams => {
    const params = new URLSearchParams(queryString)

    const query_id = params.get('query_id') || ''
    const userString = params.get('user') || '{}'
    const auth_date = parseInt(params.get('auth_date') || '0', 10)
    const hash = params.get('hash') || ''

    const user: User = JSON.parse(decodeURIComponent(userString))

    return {
      query_id,
      user,
      auth_date,
      hash
    }
  }
  const { setUserData, userData } = useAuth()
  useEffect(() => {
    if (WebApp.initData != '') setUserData(decodeQueryString(WebApp.initData))
  }, [])

  return (
    <>
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
    </>
  )
}

export default App
