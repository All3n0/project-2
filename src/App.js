import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Products from './components/Products.js'
import Login from "./pages/Login.js"
import Register from "./pages/Register.js"
import Details from "./components/Details.js"
import { Navbar } from "./components/Navbar.js";
import { CartProvider } from './context/cart.js'


function App() {
  return (
    <div>
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/details"  element={<Details />} />
          <Route path="/register"  element={<Register/>} />
        </Routes>
      </Router>
      </CartProvider>
    </div>
  )
}

export default App
