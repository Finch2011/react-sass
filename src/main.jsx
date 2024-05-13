import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import App from './App.jsx'
import Signin from './Signin.jsx'
import Erore from './404.jsx'
import Navbar from './Navbar.jsx'
import Shop from './Shop.jsx'
import Buy from './components/BuyinPrudect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/buying" element={<Buy/>}/>
      <Route path="*" element={<Erore />}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
