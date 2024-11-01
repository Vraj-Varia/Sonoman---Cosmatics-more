import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Products from './Products/Products'
import Services from './Services/Services'
import Support from './Support/Support'
import Add from './Add/Add'
import Footer from './Footer/Footer'
import Login from './Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Navbar />
      <Home />
      <Products />
      <Services />
      <Support />
      <Add />
      <Footer /> */}
      <Login />
    </div>
  )
}

export default App
