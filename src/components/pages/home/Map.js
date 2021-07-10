import React from 'react';
import {Container} from "react-bootstrap";
import "./Map.scss";

const Map = () => {
    return (
        <Container fluid>
            <section className="map-title">
                <h2>Ubicación</h2>
            </section>
            <div className="map-location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.8407136918677!2d-76.62905506596793!3d-12.658446801177998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105655100066549%3A0xf97684603450b19b!2sMunicipalidad%20de%20Mala!5e0!3m2!1ses!2spe!4v1624141982204!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </Container>
    );
};

export default Map;