import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout'
import HomePage from './pages/home'
import ReferralPage from './pages/referral'
import TaskPage from './pages/task'
import WalletPage from './pages/wallet'

const App = () => {
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
