import 'index.css'

import WebApp from '@twa-dev/sdk'
import { createRoot } from 'react-dom/client'

import App from '@/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
WebApp.ready()

root.render(<App />)
