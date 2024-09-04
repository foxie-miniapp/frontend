import 'index.css'

import { createRoot } from 'react-dom/client'
import WebApp from '@twa-dev/sdk'

import App from '@/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
WebApp.ready()

root.render(<App />)
