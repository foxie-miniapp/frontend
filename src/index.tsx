import 'index.css'

import WebApp from '@twa-dev/sdk'
import { createRoot } from 'react-dom/client'

import App from '@/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
WebApp.ready()
WebApp.setBackgroundColor('#000000')
WebApp.setHeaderColor('#000000')
WebApp.expand()

root.render(<App />)
