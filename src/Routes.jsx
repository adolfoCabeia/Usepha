import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Eventos from "./pages/Eventos"
import Equipa from "./pages/Equipa"
import Doacoes from "./pages/Doacoes"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/equipa" element={<Equipa />} />
        <Route path="/doacoes" element={<Doacoes />} />
      </Routes>
    </BrowserRouter>
  )
}