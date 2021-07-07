import React from 'react';
import {Row, Col, Form, Button, Spinner} from 'react-bootstrap'

import "./LoginForm.scss";


const LoginForm = (props) => {
    const {setShowModal} = props

    const onSubmit= (e)=>{
        e.preventDefault()
        setShowModal(false)
    }


    return (
        <div className="login-form">
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Email"/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="password" placeholder="Contraseña"/>
                        </Col>
                        <Col>
                            <Form.Control type="password" placeholder="Repetir Contraseña"/>
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">Iniciar Sesión</Button>
            </Form>
        </div>
    );
};

export default LoginForm;