import React from 'react';
import {Container} from 'react-bootstrap';
import "./About.scss";
import {ABOUT_IMG_ONE} from "../../../utils/slice";

const About = () => {
    return (
        <Container fluid>
            <header className="header-about">
                <h2 className="title-features">Sobre Nosotros</h2>
                <p>Es una mecánica automotriz de buen reconocimiento distrital con excelente calidad profesional y servicios completos.</p>
            </header>
            <div className="container-about">
                 <section className="content-about">
                    <div className="content-about-left">
                        <img src={ABOUT_IMG_ONE} alt=""/>
                    </div>
                     <div className="content-about-right">
                         <em>Somos una mecánica automotriz formada hace 30 años en el distrito de mala. a través de los años hemos implementado nuevas técnicas y materiales para el agrado de los clientes. buscamos mejorar y estar al servicio de cada cliente que llega a nosotros, brindando buena atención y un servicio de calidad. contamos con 3 sucursales y un límite de empleados capacitados y formados profesionalmente. es un gusto para nosotros trabajar en este rubro y enfrentarnos a diferentes desafíos en el campo mecánico automotriz.</em>
                         <div>
                            <a href="/workshop">
                                <button>Ver Sucursales</button>
                            </a>
                         </div>
                     </div>
                 </section>
            </div>
        </Container>
    );
};

export default About;