import { Outlet } from 'react-router-dom'
import Bottom from '../bottom'
import Preloader from '../preloader'

const MainLayout = () => {
  return (
    <div 
    className="h-screen w-screen bg-black flex items-center">
      {/* <div className="mx-auto flex h-full w-full max-w-sm flex-col overflow-x-hidden  bg-black">
        <div className="flex-1 bg-black">
          <Outlet />
        </div>
        <Bottom />
      </div> */}
      <Preloader />
    </div>
  )
}

export default MainLayout
