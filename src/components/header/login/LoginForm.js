import React, {useState} from 'react';
import {Row, Col, Form, Button, Spinner} from 'react-bootstrap'
import "./LoginForm.scss";
import {size, values} from "lodash";
import {toast} from "react-toastify";
import isEmail from "../../../utils/isEmail";
import {LoginApi, setTokenApi} from "../../../api/loginApi";
import {ERROR} from "../../../utils/globals";


const LoginForm = (props) => {
    const {setRefreshLogin} = props
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
            }else{
                setSignInLoading(true)
                LoginApi(formData).then(response =>{
                    if (response.message_type === ERROR){
                           toast.warning(response.message)
                    }else{
                        toast.success(response.message)
                        setShowModal(false);
                        setFormData(initialFormValue());
                        setTokenApi(response.data)
                        setRefreshLogin(true)
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
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className="login-form">
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Email" name="email" defaultValue={formData.email}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control type="password" placeholder="Contraseña" name="password" defaultValue={formData.password}/>
                        </Col>
                    </Row>
                </Form.Group>
                 <Row>
                     <Button variant="primary" className="button-login-singIn" type="submit">
                         {!signInLoading ? "Iniciar Sesión" : <Spinner animation="border"></Spinner>}
                     </Button>
                 </Row>
            </Form>
        </div>
    );
};

export default LoginForm;

function initialFormValue(){
    return{
        email:"",
        password:""
    }
}