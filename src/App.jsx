import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './assets/components/Home'
import MyApp from './assets/components/MyApp'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import NavbarMenu from './assets/components/NavbarMenu'

export default function App() {


  return (
    <>
      <BrowserRouter >
 
<NavbarMenu />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyApp" element={<MyApp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </>
  )
} 