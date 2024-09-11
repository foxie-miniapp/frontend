import { Outlet } from 'react-router-dom'
import Bottom from '../bottom'

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-black font-sf overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-md flex-col bg-black">
        <div className="flex-1 overflow-y-auto bg-black">
          <div className="h-[calc(100vh-64px)] overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default MainLayout
