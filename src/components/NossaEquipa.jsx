import React from "react";
import {assets} from '../assets/assets'
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const NossaEquipa = () =>{
    return(
        <section className="nossa-equipa">
            <h2 className="titulo">A Nossa Equipe</h2>
            <div className="container">
                <div className="card">
                   <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Presidente_Img} alt="Presidente" />
                    <div className="txt">
                        <h4>Adolfo Cabeia</h4>
                        <p>Presidente</p>
                    </div>
                </div>

                 <div className="card">
                    <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Felix_Img} alt="Presidente" />
                    <div className="txt">
                        <h4>Lerio Mufungueno</h4>
                        <p>Vice-Presidente</p>
                    </div>
                </div>

                 <div className="card">
                    <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Bonifacio_Img} alt="Presidente" />
                    <div className="txt">
                        <h4>Bonifacio Tchalo</h4>
                        <p>Secretário Executivo</p>
                    </div>
                </div>

                 <div className="card">
                    <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Adolfo_Icone} alt="Presidente" />
                    <div className="txt">
                        <h4>Adolfo Júnior</h4>
                        <p>Desenvolvedor FullStack</p>
                    </div>
                </div>

                 <div className="card">
                    <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Carlos} alt="Presidente" />
                    <div className="txt">
                        <h4>Carlos Musalu</h4>
                        <p>Dir. de Comunicação e Imagem</p>
                    </div>
                </div>

                 <div className="card">
                    <div className="icones">
                        <a href="#"><Facebook size={30} color="#4267B2"/></a>
                        <a href="#"><Instagram size={30} color="#C13584"/></a>
                        <a href="#"><Linkedin size={30} color="#0A66C2"/></a>
                    </div>
                    <img src={assets.Gama_Img} alt="Presidente" />
                    <div className="txt">
                        <h4>José Gama</h4>
                        <p>Contabilista</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NossaEquipa