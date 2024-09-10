import WebApp from '@twa-dev/sdk'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User, WebAppParams } from '../types/dataType'
import MainLayout from './components/layout'
import Preloader from './components/preloader'
import { useAuth } from './hooks/useAuth'
import HomePage from './pages/home'
import ReferralPage from './pages/referral'
import TaskPage from './pages/task'
import WalletPage from './pages/wallet'

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

  const [screenLoading, setScreenLoading] = useState(true);

  const handleLoadComplete = () => {
    setScreenLoading(false);
  };

  return (
    <>
      {screenLoading ?
        <Preloader onLoadComplete={handleLoadComplete} /> :
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
      }
    </>
  )
}

export default App
