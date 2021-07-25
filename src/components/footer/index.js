import React from 'react';
import {Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright, faEnvelope, faMapMarkedAlt, faMobile, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagramSquare, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const Footer = () => {
    return (
            <footer className="container-footer">
                <Container fluid>
                    <Row>
                        <section className="content-footer-top">
                            <div className="content-footer-top_left">
                                <h2>AutoPro</h2>
                                <em>Es una mecánica automotriz de buen reconocimiento distrital con excelente calidad profesional y servicios completos.</em>
                            </div>
                            <div className="content-footer-top_center">
                                <section>
                                    <h3>Service</h3>
                                    <ol>
                                        <li>service 1 service 1 service 1</li>
                                        <li>service 1 service 1 service 1</li>
                                        <li>service 1 service 1 service 1</li>
                                        <li>service 1 service 1 service 1</li>
                                    </ol>
                                </section>
                            </div>

                            <div className="content-footer-top_center">
                                <section>
                                    <h3>Product</h3>
                                    <ol>
                                        <li>product 1 product 1 product 1</li>
                                        <li>product 1 product 1 product 1</li>
                                        <li>product 1 product 1 product 1</li>
                                        <li>product 1 product 1 product 1</li>
                                    </ol>
                                </section>
                            </div>
                            <div className="content-footer-top_right">
                                <section>
                                    <h3>Contact</h3>
                                    <strong><FontAwesomeIcon icon={faMapMarkedAlt}/><span>Mala, Dignidad Nacional</span></strong>
                                    <strong><FontAwesomeIcon icon={faEnvelope}/><span>cossiomecanica2310@gmail.com</span></strong>
                                    <strong><FontAwesomeIcon icon={faMobile}/><span>+51 919130379</span></strong>
                                    <strong><FontAwesomeIcon icon={faPhoneAlt}/><span>+51 945827194</span></strong>
                                </section>
                            </div>
                        </section>
                    </Row>
                    <Row>
                        <section className="content-footer-bottom">
                            <div>
                                <h3><FontAwesomeIcon icon={faCopyright}/> 2021 Copyright: autopro.com</h3>
                            </div>
                            <div>
                                <a href="https://facebook.com/" target="blank"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                                <a href="https://facebook.com/" target="blank"><FontAwesomeIcon icon={faWhatsapp}/></a>
                                <a href="https://facebook.com/" target="blank"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                            </div>
                        </section>
                    </Row>
                </Container>
            </footer>
    );
};

export default Footer;