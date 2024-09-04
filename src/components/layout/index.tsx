import { Outlet } from 'react-router-dom'
import Bottom from '../bottom'

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="mx-auto flex h-full w-full max-w-sm flex-col overflow-x-hidden  bg-black">
        <div className="flex-1 bg-black">
          <Outlet />
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default MainLayout
