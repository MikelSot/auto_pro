import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const SigninForm = (props) => {
    const {setShowModal} = props

    const onSubmit= (e)=>{
        e.preventDefault()
        setShowModal(false)
    }


    return (
        <div className="signIn-form">
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Nombre"/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Apellido"/>
                        </Col>
                    </Row>
                </Form.Group>
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
                <Button variant="primary" type="submit">Registrase Ahora</Button>
            </Form>
        </div>
    );
};

export default SigninForm;