import React from "react";
import Hero from '../components/Hero'
import Layout from "../layout/Layout";
import Estatisca from "../components/Estatisca";
import MensagemPresidente from "../components/MesangemPresidente";
import Sobre_nos from '../components/Sobre_Nos'
import NossaEquipa from "../components/NossaEquipa";
import Eventos from '../components/Eventos'
import Blog from '../components/Blog'
import Doar from '../components/Doar'

const Home = () =>{
    return(
        <div>
            <Layout>
                <Hero/>
                <Estatisca/>
                <MensagemPresidente />
                <Sobre_nos/>
                <NossaEquipa/>
                <Eventos/>
                <Blog/>
                <Doar/>
            </Layout>
        </div>
    )
}

export default Home