import React from 'react';
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ImgTeamHome_1 from "../../../assets/img/slider/hombre-con-barba-en-la-cara-sin-afeitar-fondo-gris-159198008.jpg";
import ImgTeamHome_2 from "../../../assets/img/slider/depositphotos_33501317-stock-photo-portrait-of-serious-man.jpg";
import ImgTeamHome_3 from "../../../assets/img/slider/istockphoto-1200677760-612x612.jpg";
import "./Team.scss";

const Team = () => {
    return (
        <>
            <Container fluid>
                <section className="someServices-header">
                    <h2>Team</h2>
                    <div className="someServices-header-button">
                        <Link to="/workshop">
                            <button className="someServices-button-home">Ver Todos <FontAwesomeIcon icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </section>
                <section className="container-team-home">
                    <Row>
                        <section className="content-team-home">
                            <div className="content-team-home-header">
                                <img src={ImgTeamHome_1} alt=""/>
                            </div>
                            <div className="content-team-home-body">
                                <strong>Responsable</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </section>
                        <section className="content-team-home">
                            <div className="content-team-home-header">
                                <img src={ImgTeamHome_2} alt=""/>
                            </div>
                            <div className="content-team-home-body">
                                <strong>Entrega a tiempo</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </section>
                        <section className="content-team-home">
                            <div className="content-team-home-header">
                                <img src={ImgTeamHome_3} alt=""/>
                            </div>
                            <div className="content-team-home-body">
                                <strong>Buena Calidad</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </section>
                        <section className="content-team-home">
                            <div className="content-team-home-header">
                                <img src={ImgTeamHome_3} alt=""/>
                            </div>
                            <div className="content-team-home-body">
                                <strong>Buena Calidad</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </section>
                    </Row>
                </section>
            </Container>
        </>
    );
};

export default Team;