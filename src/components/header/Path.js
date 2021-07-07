import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "./Path.scss"
import SigninForm from "./signin/SigninForm";

export default function Path(props){
    const {openModal, setShowModal} = props;

    return (
        <>
            <Container fluid>
                <Row className="row-path">
                    <nav className="nav-path">
                        <a href="/">Home</a>
                        <div className="nav-item_dropdown">
                            <div className="nav-item_dropdown-header">
                                <strong>Servicios <FontAwesomeIcon icon={faChevronDown}/></strong>
                            </div>
                            {/*<div className="nav-item_dropdown-body">*/}
                            {/*    <a href="/service">Servicios</a>*/}
                            {/*    <a href="/product">Productos</a>*/}
                            {/*</div>*/}
                        </div>
                        <a href="/blog">Blog</a>
                        <a href="/appointment">Cita</a>
                        <strong className="path-register" onClick={()=>openModal(<SigninForm setShowModal={setShowModal}/>)}>Registrarse</strong>
                    </nav>
                </Row>
            </Container>
        </>
    );
}