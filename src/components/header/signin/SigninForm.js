import React, {useState} from 'react';
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {values, size} from 'lodash';
import {toast} from 'react-toastify';
import isEmail from "../../../utils/isEmail";
import {SignInApi} from "../../../api/SignInApi";
import {ERROR} from "../../../utils/globals";

const SigninForm = (props) => {
    const {setShowModal} = props
    const [formData, setFormData] = useState(initialFormValue());
    const [signInLoading, setSignInLoading] = useState(false);

    const onSubmit= (e)=>{
        e.preventDefault()
        let validCount = 0
        values(formData).some(value => {
            value && validCount++
            return null
        });

        if (validCount !== size(formData)){
            toast.warning("completa todos los campos del formulario")
        }else {
            if(!isEmail(formData.email)){
                toast.warning("Email invalido")
            }else if (formData.password !== formData.repeat_password){
                toast.warning("Las contraseñas tienen que ser iguales")
            }else if (size(formData.password) < 6){
                toast.warning("Las contraseñas tiene que tener al menos 6 caracteres")
            }else{
                setSignInLoading(true)
                // peticion a la api
                SignInApi(formData).then(response =>{
                    if (response.message_type === ERROR){
                        toast.warning(response.message)
                    }else{
                        toast.success(response.message)
                        setShowModal(false);
                        setFormData(initialFormValue());
                    }
                }).catch(()=>{
                    toast.error("Error del servidor, intenentelo mas tarde")
                }).finally(()=>{
                    setSignInLoading(false)
                })
            }
        }
    }

    const onChange = (e) =>{
        // console.log(e.target.name)// optendo el valor por el atributo NAME del imput
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className="signIn-form">
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                defaultValue={formData.name}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                name="last_name"
                                placeholder="Apellidos"
                                defaultValue={formData.last_name}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                defaultValue={formData.email}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="password"
                                name="password"
                                defaultValue={formData.password}
                                placeholder="Contraseña"/>
                        </Col>
                        <Col>
                            <Form.Control
                                type="password"
                                name="repeat_password"
                                defaultValue={formData.repeat_password}
                                placeholder="Repetir Contraseña"/>
                        </Col>
                    </Row>
                </Form.Group>
                <Row>
                    <Button variant="primary" className="button-login-singIn" type="submit">
                        {!signInLoading ? "Registrase ahora" : <Spinner animation="border"></Spinner>}
                    </Button>
                </Row>
            </Form>
        </div>
    );
};

export default SigninForm;


function initialFormValue(){
    return{
        name: "",
        last_name:"",
        email:"",
        password:"",
        repeat_password:""
    }
}