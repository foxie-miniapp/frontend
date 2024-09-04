import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import TaskPage from './pages/task'
import ReferralPage from './pages/referral'
import WalletPage from './pages/wallet'
import MainLayout from './components/layout'


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
