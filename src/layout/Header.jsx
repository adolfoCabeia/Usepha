import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'
import { SquareX, Menu } from 'lucide-react';

const Header = () => {
  const [menuActivo, setMeuActivo] = useState(false) 
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={assets.Logo_Img} alt="Logotipo" />
        </div>

        <nav>
          <Menu size={30} color='#234190' onClick={() => setMeuActivo(true)} className='btn-open'/>
          <ul className={menuActivo ? 'active' : ''}>
            <SquareX size={30} color='#FF0000' onClick={()=> setMeuActivo(false)} className='btn-close'/>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/eventos" className={({ isActive }) => isActive ? 'active' : ''}>
                Eventos
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipa" className={({ isActive }) => isActive ? 'active' : ''}>
                A Nossa Equipa
              </NavLink>
            </li>
            <li>
              <NavLink to="/doacoes" className={({ isActive }) => isActive ? 'active' : ''}>
                Doações
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
