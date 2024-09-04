import { useAuth } from '@/hooks/useAuth'
import WebApp from '@twa-dev/sdk'

const AuthPage = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="mx-auto flex h-full w-full max-w-sm flex-col overflow-x-hidden  bg-black">
        <div className="flex flex-1 flex-col items-center justify-center bg-black">
          <button
            className="rounded bg-white p-2 text-black"
            onClick={() => {
              WebApp.initData
            }}
          >
            Login with telegram
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
