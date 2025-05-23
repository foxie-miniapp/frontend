import { Outlet } from 'react-router-dom'

import Bottom from '../bottom'

const MainLayout = () => {
  return (
    <div className="h-[100svh] w-screen overflow-hidden bg-black font-sf">
      <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden bg-black">
        <div className="flex-1 overflow-y-auto bg-black">
          <Outlet />
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default MainLayout
