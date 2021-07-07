import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCog,
    faQuestionCircle,
    faSearch,
    faTruckPickup,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss"
import LoginForm from "./login/LoginForm";


export default function Nav(props){
    const {openModal, setShowModal} = props;

    return (
        <>
            <Container fluid>
                <Row className="nav-row">
                    <Col>
                        <a href="/" className="nav-icon_title">
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={faTruckPickup} id="nav-search-home"/>
                            </div>
                            <h2>AutoPro</h2>
                        </a>
                    </Col>
                    <Col>
                        <div className="nav-right">
                            <div className="nav-search">
                                <input type="text" />
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <FontAwesomeIcon icon={faUser} onClick={()=>openModal(<LoginForm setShowModal={setShowModal}/>)}/>
                            <FontAwesomeIcon icon={faCog}/>
                            <FontAwesomeIcon icon={faQuestionCircle}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}