import 'index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { createRoot } from 'react-dom/client'

import App from '@/App'

import queryClient from './lib/client/query-client'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
WebApp.ready()
WebApp.setBackgroundColor('#000000')
WebApp.setHeaderColor('#000000')
WebApp.expand()
WebApp.disableVerticalSwipes()

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
