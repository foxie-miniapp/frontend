import { Outlet } from 'react-router-dom'
import Bottom from '../bottom'
import Preloader from '../preloader'
import { useEffect, useState } from 'react'

const MainLayout = () => {
  const [isLoading, setLoading] = useState(true)
  //loading screen first time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="h-screen w-screen bg-black font-sans">
      <div className="mx-auto flex h-full w-full max-w-md flex-col overflow-hidden  bg-black">
        {isLoading ? (
          <Preloader onLoadComplete={() => {
            
          }} />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto bg-black">
              <Outlet />
            </div>
            <Bottom />
          </>
        )}
      </div>
    </div>
  )
}

export default MainLayout
