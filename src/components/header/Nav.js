import React from 'react';
import {Container, Row, Col, NavDropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBell,
    faIndustry, faListAlt, faMoneyCheck, faPowerOff,
    faQuestionCircle,
    faSearch,
    faTruckPickup,
    faUser, faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss"
import LoginForm from "./login/LoginForm";
import {Link} from "react-router-dom";
import {logoutApi} from "../../api/loginApi";


export default function Nav(props){

    const {client, setRefreshLogin} = props;
    const {openModal, setShowModal} = props;

    const logout=()=>{
        logoutApi();
        setRefreshLogin(true);
    }


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
                            {
                                client?(
                                    <>
                                        <NavDropdown title={<FontAwesomeIcon icon={faBell}/>} id="navbarScrollingDropdown">
                                            <NavDropdown.Item href=""></NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title={<FontAwesomeIcon icon={faUserCircle}/>} id="navbarScrollingDropdown">
                                            <NavDropdown.Item><strong>{`${client?.name} ${client?.last_name}`}</strong><em>{`${client.uri}`}</em></NavDropdown.Item>
                                            <NavDropdown.Item href={`/${props.client?.uri}`}><FontAwesomeIcon icon={faUser}/>Perfil</NavDropdown.Item>
                                            <NavDropdown.Item href="/service"><FontAwesomeIcon icon={faListAlt}/>Historial citas</NavDropdown.Item>
                                            <NavDropdown.Item href="/service"><FontAwesomeIcon icon={faMoneyCheck}/>Historial Compras</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="" onClick={logout}><FontAwesomeIcon icon={faPowerOff}/>Cerrar Sesión</NavDropdown.Item>
                                        </NavDropdown>

                                    </>
                                ):(
                                    <>
                                        <FontAwesomeIcon icon={faUser} onClick={()=>openModal(<LoginForm setShowModal={setShowModal} setRefreshLogin={props.setRefreshLogin}/>)}/>
                                        <Link to="/workshop">
                                            <FontAwesomeIcon icon={faIndustry}/>
                                        </Link>
                                        <FontAwesomeIcon icon={faQuestionCircle}/>
                                    </>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

