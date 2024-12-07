import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store/store'
import { Toaster } from './components/ui/toaster'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
)
