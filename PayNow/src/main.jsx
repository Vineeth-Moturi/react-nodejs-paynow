import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.getElementById('root').style.width = '100vw'
document.getElementById('root').style.height = '100vh'
document.getElementById('root').style.minHeight = '100%'
document.getElementById('root').style.minWidth = '100%'
document.getElementById('root').style.maxHeight = '100%'
document.getElementById('root').style.maxWidth = '100%'
document.getElementById('root').style.display = 'flex'
document.getElementById('root').style.flexDirection = 'column'
document.getElementById('root').style.overflow = 'hidden'
const appRoot = document.getElementById('root')
if(appRoot){
  appRoot.classList.add('container', 'p-0')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
