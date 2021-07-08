import React from 'react';
import {Container, Row} from 'react-bootstrap';
import "./Features.scss"

const Features = () => {
    return (
        <>
            <Container fluid>
                <header className="header-features">
                    <h2 className="title-features">Features</h2>
                    <p>consectetur adipisicing elit. Animi architecto earum, ipsam nostrum quaerat quis ratione sed voluptates! Ab alias delectus facere nisi, odio totam vitae! Ut!</p>
                </header>
                <div className="container-features">
                    <Row>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Responsable</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore doloremque explicabo ipsam modi natus nisi nulla vero voluptatibus. Atque beatae consectetur distinctio ducimus error est, minima nostrum odio reiciendis?</p>
                            </div>
                        </section>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Entrega a tiempo</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore doloremque explicabo ipsam modi natus nisi nulla vero voluptatibus. Atque beatae consectetur distinctio ducimus error est, minima nostrum odio reiciendis?</p>
                            </div>
                        </section>
                        <section className="content-features">
                            <div className="content-features-body">
                                <strong>Buena Calidad</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore doloremque explicabo ipsam modi natus nisi nulla vero voluptatibus. Atque beatae consectetur distinctio ducimus error est, minima nostrum odio reiciendis?</p>
                            </div>
                        </section>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Features;