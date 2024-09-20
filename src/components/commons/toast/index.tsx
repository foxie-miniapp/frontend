import { Zap } from 'lucide-react'
import { ToastBar, Toaster } from 'react-hot-toast'

export default function DismissableToast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '8px',
            background: '#171717', // dark gray background
            color: '#FFB625', // orange text
            border: '1px solid #FFDB6F', // orange border
            padding: '8px',
            width: '100%',
            fontSize: '14px',
            maxWidth: '384px' // max-w-md equivalent
          }
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ message }) => (
              <div className="flex items-center">
                <Zap size={16} absoluteStrokeWidth />
                {message}
              </div>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  )
}
