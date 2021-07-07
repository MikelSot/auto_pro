import React from 'react';
import {Container, Row, Dropdown} from 'react-bootstrap';
import "./Path.scss"
import SigninForm from "./signin/SigninForm";
import CustomToggle from "./helper/configDropDowPath";

export default function Path(props){
    const {openModal, setShowModal} = props;
    return (
        <>
            <Container fluid>
                <Row className="row-path">
                    <nav className="nav-path">
                        <a href="/">Home</a>
                        <div className="nav-item_dropdown">
                            <Dropdown className="nav-item_dropdown-header" >
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                                    Servicios
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/service">Servicios</Dropdown.Item>
                                    <Dropdown.Item href="/product">Productos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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

