import { Section } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sobre_Nos = () =>{
    return(
      <section className="sobre-nos-container">
      <h2 className="titulo">Sobre nós <span className="destaque">(USEPHA)</span></h2>
      <p className="subtitulo">
        Nossa ONG é dedicada a fortalecer e transformar comunidades ao redor do país.
      </p>

      <div className="linha-horizontal">

        <div className="item">
          <div className="icone">🎯</div>
          <h3>Nossa Visão</h3>
          <p>
            Empoderar comunidades angolanas e africanas em geral, a construir um futuro próspero através do empreendedorismo inclusivo e da gestão sustentável de pequenos negócios.
          </p>
        </div>

        <div className="linha-conector-horizontal"></div>

        <div className="item">
          <div className="icone">🎓</div>
          <h3>Nossa Missão</h3>
          <p>
            Formar, capacitar indivíduos e comunidades na base da pirâmide com habilidades e recursos para iniciar pequenos negócios e promover o desenvolvimento local.
          </p>
        </div>

        <div className="linha-conector-horizontal"></div>

        <div className="item">
          <div className="icone">⏳</div>
          <h3>3+ Anos</h3>
          <p>
            Atuando com impacto positivo nas comunidades.  
            <br />
            <button className="botao"><NavLink to={'/sobre'}>Mais sobre nós</NavLink></button>
          </p>
        </div>

      </div>
    </section>
    )
}

export default Sobre_Nos