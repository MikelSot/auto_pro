import React from "react";
import { Container, Row } from "react-bootstrap";
import ImgSlideAutoRepair from "../../../assets/img/slider/img.png";
import {Form, Input, Button, Select, message, Tooltip} from "antd";
import {toast} from 'react-toastify';
import {map} from "lodash";
import {
  SelectOrderFromAppointment,
  SelectServiceFromAppointment,
  SelectWorkshopFromAppointment
} from "./urils/dataSelectForm";
const { Option } = Select;

const key = "updatable";

const FormAppointment = (props) => {
  const [form] = Form.useForm();
  const {setDataFormAppointment} = props
  const dataService = SelectServiceFromAppointment()
  const dataWorkshop = SelectWorkshopFromAppointment()
  const dataOrder = SelectOrderFromAppointment()

  const onFinish = (values) => {
    if (values !== "") {
      message.loading({ content: "Guardando información...", key });
      setTimeout(() => {
        message.success({ content: "Guardado exitoso!", key });
        if (values.workshop === undefined){
          toast.warning("El campo de taller no puede estar vacio")
        }else if (values.service === undefined){
          toast.warning("El campo de servicio no puede estar vacio")
        }else if (values.order_attention === undefined){
          toast.warning("El campo de orden de atencion no puede estar vacio")
        }else if (values.vehicle_type  === undefined){
          toast.warning("El campo de tipo de vehiculo no puede estar vacio o muy corto")
        }else if (values.pick_up  === undefined){
          toast.warning("El campo de recojo a domicilio no puede estar vacio o muy corto")
        } else {
          toast.success("datos guardados correctamente")
          setDataFormAppointment(values)
        }
      }, 1000);
    }
  };

  return (
    <>
        <Container fluid>
          <Row>
            <div class="container-fluid mx-auto form-margin-appointment">
              <div class="card card0 border-0">
                <div class="row products-items d-flex appointment-form-user">
                  <div class="col-lg-6">
                    <div class="card1">
                      <div class="row image-appointment">
                        <img src={ImgSlideAutoRepair} class="image" alt="" />{" "}
                      </div>
                    </div>
                  </div>
                  <Form
                      form={form}
                      name="control-hooks"
                      onFinish={onFinish}
                      className="formulario-appointment"
                  >
                    <Form.Item
                        name="workshop"
                        className="items-input"
                    >
                      <Select
                          allowClear
                          className="input-form-appointment"
                          placeholder="Seleccione un taller"
                      >
                        {
                          map(dataWorkshop, workshop =>(
                              <Option value={workshop.name} key={workshop.id}>{workshop.name}</Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                    <Form.Item
                        name="service"
                        className="items-input"
                    >
                      <Select
                          allowClear
                          className="input-form-appointment"
                          placeholder="Seleccione un servicio"
                      >
                        {
                          map(dataService, service =>(
                              <Option value={service.name} key={service.id}>{service.name}</Option>
                          ))
                        }
                      </Select>
                    </Form.Item>
                    <div className="switch-order_for-appointment">
                      <Form.Item
                          name="vehicle_type"
                          className="items-input"
                      >
                        <Input
                            allowClear
                            className="input-form-appointment"
                            placeholder="Tipo de vehiculo"
                        />
                      </Form.Item>
                      <Tooltip title="N° de orden de atencion">
                        <Form.Item
                            name="order_attention"
                            className="items-input"
                        >

                          <Select
                              allowClear
                              className="input-form-appointment"
                              placeholder="Orden"
                          >
                            {
                              map(dataOrder, order =>(
                                  <Option value={order} key={order}>{order}</Option>
                              ))
                            }
                          </Select>
                        </Form.Item>
                      </Tooltip>
                      <Tooltip title="Recojo a domicilio">
                        <Form.Item
                            name="pick_up"
                            className="items-input"
                        >
                          <Select
                              allowClear
                              className="input-form-appointment"
                              placeholder="Recojo"
                          >
                            <Option value={true} key={1}>Si</Option>
                            <Option value={false} key={2}>No</Option>
                          </Select>
                        </Form.Item>
                      </Tooltip>
                    </div>
                    <Form.Item
                        name="description"
                        className="items-input"
                    >
                      <Input.TextArea placeholder="Descripcion"/>
                    </Form.Item>

                    <div className="d-flex justify-content-between">
                      <Button type="primary" htmlType="submit">
                        Guardar
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Row>
        </Container>
    </>
  );
};

export default FormAppointment;

