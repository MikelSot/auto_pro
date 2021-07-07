import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagramSquare, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import "./Header.scss"


export default function Header(){
    return (
        <>
            <Container fluid>
                <Row className="header-row">
                    <Col className="header-col" >
                        <strong><em>Telefono:</em> 949982694</strong>
                        <strong><em>Email:</em> miguelsr.1084@gmail.com</strong>
                    </Col>
                    <Col xs lg="3">
                        <div className="header-col-div">
                            <FontAwesomeIcon icon={faInstagramSquare}/>
                            <FontAwesomeIcon icon={faWhatsapp}/>
                            <FontAwesomeIcon icon={faFacebookSquare}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}