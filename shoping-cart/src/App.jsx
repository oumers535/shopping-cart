import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart/cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ShopContextProvider } from './context/shop-context'
const App = () => {
  return (
    <ShopContextProvider>
    <Router >
      <div className='bg-gray-100 min-h-screen '>
          
        <Navbar />
         <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>

      </Routes>
      <Footer />
      
      </div>
    
     
    </Router>
    </ShopContextProvider>
  )
}

export default App