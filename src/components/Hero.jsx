import React from 'react'
import Slider from './Slider'

const Hero = () =>{
    return(
        <div className='container hero'>
            <Slider />
            <div className="txt_hero">
                <h2>Transformando Comunidades em Angola</h2>
                <div className="desc">
                    <p>Nossa ONG é dedicada a fortalecer e transformar comunidades ao redor do país.</p>

                    <p>Acreditamos realmente que trabalhando jundos podemos melhorar as nossas comunidades em África.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero