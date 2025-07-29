import React from "react";
import {UserCog, GraduationCap, School} from 'lucide-react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Estatisca = () =>{
     const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className="experiencia" ref={ref}>
            <div className="container">
                <div className="icone">
                    <UserCog size={40}/>
                    <h4>{inView ? <CountUp end={30} duration={4} /> : 0}+</h4>
                    <h3>Funcionários</h3>
                </div>
                <div className="icone">
                    <GraduationCap size={40}/>
                    <h4>{inView ? <CountUp end={100} duration={4}/> : 0}+</h4>
                    <h3>Formados</h3>
                </div>
                <div className="icone">
                    <School size={40}/>
                    <h4>{inView ? <CountUp end={130} duration={4}/>: 0}+</h4>
                    <h3>Estudantes</h3>
                </div>
            </div>
        </div>
    )
}

export default Estatisca