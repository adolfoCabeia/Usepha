import React from 'react'
import { assets } from '../assets/assets'

const Doar = () => {
  return (
    <section className='doacao'>
      <div className="container">
        <div className="img">
          <span className='overlay'></span>
          <img src={assets.Doacao_img} alt="Imagem de doação" />
          
          <div className="conteudo">
            <h2>Ajude a comunidade Fazendo doações</h2>
            <button className="botao">Doar</button>
          </div>

          <h3 className='slogan'>Fazer o bem faz bem</h3>
        </div>
      </div>
    </section>
  )
}

export default Doar
