import React from 'react';
import {Container, Row} from 'react-bootstrap';
import "./Features.scss"

const Features = () => {
    return (
        <>
            <Container fluid>
                <header className="header-features">
                    <h2 className="title-features">Nuestro Trabajo</h2>
                    <p>consectetur adipisicing elit. Animi architecto earum, ipsam nostrum quaerat quis ratione sed voluptates! Ab alias delectus facere nisi, odio totam vitae! Ut!</p>
                </header>
                <div className="container-features">
                    <Row>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Empleados</strong>
                                <p>Los empleados de nuestra mecánica se encuentran con toda la capacitación ética y profesional que se requiere para un trabajo en este campo. nuestros empleados tienen la responsabilidad de realizar trabajos completos y ofrecer una atención respetable.</p>
                            </div>
                        </section>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Calidad</strong>
                                <p>Nuestros servicios y materiales son uno de los mejores que se pueden encontrar en el distrito de mala. como en el artículo anterior se conoce la calidad de nuestros empleados de igual manera nuestros materiales son de una excelente resistencia y duración que cada cierto tiempo va mejorando de acuerdo con los nuevos materiales que salen al mercado.</p>
                            </div>
                        </section>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Tiempo</strong>
                                <p>El tiempo que dura el servicio puede variar dependiendo del nivel de daño que tiene el vehículo ingresado, pero aquello no significa que la duración será innecesaria o cansada, ya que para cualquier tiempo de espera contamos con una pequeña sala donde podrá realizar la espera y adquirir bebidas o bocados que se encuentran en un mostrador.</p>
                            </div>
                        </section>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Features;