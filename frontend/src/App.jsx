import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home.jsx'


import RegisterButton from './pages/register.jsx'
import LoginButton from './pages/login.jsx'
import ProfilePage from './pages/profile.jsx'
import Category from './pages/category.jsx'
import About from './pages/about.jsx'


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/contact" element={<RegisterButton />} />
        <Route path="/register" element={<RegisterButton />} />
        <Route path="/login" element={<LoginButton />} />
         <Route path="/profile" element={<ProfilePage/>} />
      </Routes>


    </>
  )
}

export default App
