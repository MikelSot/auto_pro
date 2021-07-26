import React, {useCallback, useEffect, useState} from "react";
import "./Edit.scss";
import { MenuLeftInit } from "../../../header/utils/pathLeft";
import "antd/dist/antd.css";
import Head from "../../../header";
import {Button, Col, Form, Row} from "react-bootstrap";
import {EditDataClient, GetDataClientByID, UploadAvatarClient} from "../../../../api/client";
import {toast} from "react-toastify";
import {API_HOST, ERROR} from "../../../../utils/globals";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {Input} from "antd";
import {useDropzone} from 'react-dropzone'
import isEmail from "../../../../utils/isEmail";


const Edit = (props) => {
    const [showDataClient, setShowDataClient] = useState(null);
    useEffect(()=>{
        GetDataClientByID(props.client.id).then(response =>{
            setShowDataClient(response.data)
        }).catch(()=>{
            toast.error("Reviews no disponibles");
        });
    }, [])

    const [avatarClient, setAvatarClient] = useState(
        showDataClient?.picture ? `${API_HOST}/${showDataClient?.picture}`: null
    );

    const [avatarFile, setAvatarFile] = useState(null);
    const onDropAvatar = useCallback(acceptedFile =>{
        const file = acceptedFile[0];
        setAvatarClient(URL.createObjectURL(file))
        setAvatarFile(file)
    })

    const {getRootProps:getRootAvatarProps, getInputProps:getInputAvatarProps} = useDropzone({
        accept:"image/png, image/jpg, image/jpeg ",
        noKeyboard:true,
        multiple:false,
        onDrop:onDropAvatar
    })


    const onSubmit= (e)=>{
        e.preventDefault()
        if (avatarFile){
            console.log("SE EJECUTA")
            UploadAvatarClient(avatarFile).catch(()=>{
               toast.error("Error al subir la imagen")
            }).finally(()=>{
                window.location.reload();
            });
        }

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
            })
        }
    }

    const onChange =(e) =>{
      setShowDataClient({...showDataClient,[e.target.name]:e.target.value});
    }

    console.log(showDataClient)


  return (
      <>
        <Head setRefreshLogin ={props.setRefreshLogin} client={props.client} />
        <MenuLeftInit />
        <section className="section-edit-profile-data">
          <div className="contenedor-form-data-profile">
            <h2 className="txt-title-edit-profile">Editar perfil</h2>

            <div className="edit-img-profile-data">
              <div className="avatar-client" style={{backgroundImage: avatarFile === null ?`url('${API_HOST}/${showDataClient?.picture}')` : `url('${avatarClient}')`}}
                   {...getRootAvatarProps()}
              >
                  <input {...getInputAvatarProps()}/>
                  <div>
                    <FontAwesomeIcon icon={faCamera}/>
                  </div>
              </div>
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
                                <Form.Label>Contraseña</Form.Label>
                                <Input.Password name="password" className="form-control" value={showDataClient?.password} />
                            </Col>
                            <Col>
                                <Form.Label>Direccion:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    defaultValue={showDataClient?.address}
                                />
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

