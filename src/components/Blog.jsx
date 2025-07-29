import React from "react";
import Slider from "react-slick";
import { eventosData } from "../assets/assets";

function Eventos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="eventos">
      <h2 className="titulo">Blog</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {eventosData.map((evento) => (
            <div key={evento.id} className="evt">
              <div className="card">
                <div className="img-box">
                  <img src={evento.imagem} alt={evento.titulo} />
                  <div className="data">{evento.data}</div>
                </div>
                <div className="conteudo">
                  <div className="tags">
                    <span className="categoria">{evento.categoria}</span>
                    <span className="local">{evento.local}</span>
                  </div>
                  <h3 className="titulo-evento">{evento.titulo}</h3>
                  <p className="descricao">{evento.descricao.slice(0, 100)}</p>
                  <a className="btn" href="#">SAIBA MAIS</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Eventos;
