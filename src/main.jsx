import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './i18n.js'
import LoaderComponent from './Components/Loader/LoaderComponent.jsx'

function Root(){
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=> setLoading(false), 500)
    return ()=>clearTimeout(timer)
  }, [])

  return loading ? <LoaderComponent /> :(
    <BrowserRouter>
    <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
    
  </StrictMode>,
)
