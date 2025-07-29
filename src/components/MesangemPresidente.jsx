import React from "react";
import { assets } from '../assets/assets';

const MensagemPresidente = () => {
    return (
        <section className="msg_presidente">
            <div className="container">
                <div className="img">
                    <img src={assets.Presidente_Img} alt="Presidente da USEPHA" />
                </div>
                <div className="mensagem">
                    <span className="overlay"></span>
                    <div className="txt">
                        <h2>Mensagem do Presidente da USEPHA</h2>

                        <p>
                           Prezados membros, parceiros e comunidades africanas, é com elevada consideração que reafirmamos nosso compromisso com a missão da USEPHA: capacitar indivíduos em situação de vulnerabilidade por meio da formação e do empreendedorismo. Buscamos fornecer ferramentas essenciais para que possam iniciar e gerir pequenos negócios, promovendo o desenvolvimento econômico local e contribuindo significativamente para a redução da pobreza, tanto em Angola quanto em outras regiões do continente africano.
                        </p>
                        <p>
                            Nossa visão é a de construir um futuro próspero e sustentável, alicerçado em princípios de inclusão, equidade, respeito à dignidade humana, transparência e cooperação. Por meio do empreendedorismo inclusivo e da gestão responsável, trabalhamos para criar oportunidades equitativas e fortalecer a autonomia das comunidades. Com o apoio de nossos parceiros e o engajamento contínuo das comunidades, continuaremos a transformar realidades e impulsionar o progresso social e econômico de forma duradoura.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MensagemPresidente;
