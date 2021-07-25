import React, {useEffect, useState} from "react";
import "./Edit.scss";
import { MenuLeftInit } from "../../../header/utils/pathLeft";
import { Image} from "antd";
import "antd/dist/antd.css";
import Head from "../../../header";
import {Button, Col, Form, Row} from "react-bootstrap";
import {EditDataClient, GetDataClientByID} from "../../../../api/client";
import {toast} from "react-toastify";
import isEmail from "../../../../utils/isEmail";
import {ERROR} from "../../../../utils/globals";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Edit = (props) => {
    const [showDataClient, setShowDataClient] = useState(null);
    useEffect(()=>{
            GetDataClientByID(props.client.id).then(response =>{
                setShowDataClient(response.data)
            }).catch(()=>{
                toast.error("Reviews no disponibles");
            });
    }, [])

    const onSubmit= (e)=>{
        e.preventDefault()

        if(!isEmail(showDataClient.email)){
            toast.warning("Email invalido")
        }else{
            EditDataClient(showDataClient).then(response =>{
                if (response.message_type === ERROR){
                    toast.warning(response.message)
                }else{
                    toast.success(response.message)
                }
            }).catch(()=>{
                toast.error("Error del servidor, intenentelo mas tarde")
            }).finally(()=>{
                window.location.reload();
            })
        }
    }

    const onChange =(e) =>{
      setShowDataClient({...showDataClient,[e.target.name]:e.target.value});
    }

  return (
      <>
        <Head setRefreshLogin ={props.setRefreshLogin} client={props.client} />
        <MenuLeftInit />
        <section className="section-edit-profile-data">
          <div className="contenedor-form-data-profile">
            <h2 className="txt-title-edit-profile">Editar perfil</h2>

            <div className="edit-img-profile-data">
              <Image
                  className="img-client-profile-data"
                  src="https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
              />
              <Button
                  type="primary"
                  shape="circle"
                  icon={<FontAwesomeIcon icon={faCamera}/>}
                  size="large"
                  className="btn-edit-image-profile-data"
              />
            </div>
            <div className="form-edit-profile-data">
                <Form onSubmit={onSubmit} onChange={onChange} className="form-edit-profile">
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Nombres:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    defaultValue={showDataClient?.name}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Apellidos:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="last_name"
                                    defaultValue={showDataClient?.last_name}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    defaultValue={showDataClient?.email}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    defaultValue={showDataClient?.phone}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Dni:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dni"
                                    defaultValue={showDataClient?.dni}
                                    />
                            </Col>
                            <Col>
                                <Form.Label>Ruc:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ruc"
                                    defaultValue={showDataClient?.ruc}
                                   />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Direccion:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    defaultValue={showDataClient?.address}
                                />
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Form.Group>
                    <div className="btn-client-edit-profile">
                        <Button variant="primary" type="submit" >
                            Guardar cambios
                        </Button>
                    </div>
                </Form>
            </div>
          </div>
        </section>
      </>
  );
};

export default Edit;

const isDni =(string)=>{
    const dniValid = /([1-9]{8})/;
    return dniValid.test(String(string).toLowerCase());
}