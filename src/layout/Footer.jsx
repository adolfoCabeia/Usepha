import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // usando lucide-react
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-coluna logo">
          <img src={assets.Logo_Img} alt="Logotipo" />
          <p>
            Nossa organização realmente acredita que trabalhando juntos,
            podemos salvar mais vidas.
          </p>
        </div>

        <div className="footer-coluna">
          <h4>Links Rápidos</h4>
          <ul>
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/eventos">Eventos</NavLink></li>
            <li><NavLink to="/equipa">A Nossa Equipa</NavLink></li>
            <li><NavLink to="/doacoes">Doações</NavLink></li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h4>Sobre</h4>
          <ul>
            <li><NavLink to="/sobre">Quem Somos</NavLink></li>
            <li><NavLink to="/missao">Missão e Visão</NavLink></li>
            <li><NavLink to="/voluntariado">Voluntariado</NavLink></li>
          </ul>
        </div>

        {/* Coluna Contato e redes sociais */}
        <div className="footer-coluna">
          <h4>Contato</h4>
          <p>Email: contacto@usepha.org</p>
          <p>Telefone: +244 928 328 205</p>

          <h4>Redes Sociais</h4>
          <div className="redes-sociais">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={30} color="#4267B2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={30} color="#C13584" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={30} color="#0A66C2"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
