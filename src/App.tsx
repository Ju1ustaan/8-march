

import { Routes, Route } from "react-router-dom"
import Movies from './pages/Movies'
import Presents from './pages/Presents'
import Services from './pages/Services'
import Home from './pages/Home'
import './index.css'

function App() {

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/gifts" element={<Presents />} />
      <Route path="/services" element={<Services />} />
    </Routes>

  )
}

export default App
