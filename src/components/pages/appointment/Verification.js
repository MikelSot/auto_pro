import React, { useState} from "react";
import {Container, Row} from "react-bootstrap";
import { Button } from "antd";
import Result from "./Result";
import {hourSelected} from "./urils/calendarHour";
import {toast} from "react-toastify";
import {AppointmentCreateApi} from "../../../api/appointment";
import {ERROR} from "../../../utils/globals";
import client from "../../../hooks/client";

export const Verification =(props) =>{
  const {dataFormAppointment, hourAppointment, dateForm} = props;
  const [viewStep, setViewStep] = useState(<VerificationDate dataFormAppointment={dataFormAppointment} hourAppointment={hourAppointment} dateForm={dateForm}/>)
  const date_hour = hourSelected(hourAppointment, dateForm)
  dataFormAppointment.date_hour = date_hour;
  const clientNow = client();

  const stepResult = () => {
    if (clientNow === null){
        toast.error("Debe iniciar sesion para poder reservar la cita")
    }else {
        dataFormAppointment.client_id = clientNow.id
        AppointmentCreateApi(dataFormAppointment).then(response =>{
            if (response.message_type === ERROR){
                toast.warning(response.message)
            }else{
                toast.success(response.message)
            }
        }).catch((err)=>{
            toast.error("ERROR ->" + err)
        }).finally(()=>{
            document.getElementById("btn-step-result").style.visibility = "hidden";
            setViewStep( <Result /> );
        })
    }
  };


    return (
      <>
        <Container fluid>
          <Row>
            <div className="section-verification-appointment">
              <div className="c-step-veri-result">
                <section>
                  <div>{viewStep}</div>
                  <div className="btn-appointment-confirm">
                    <Button
                        type="primary"
                        id="btn-step-result"
                        onClick={() =>stepResult()}
                    >
                        Confirmar Cita
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
}

export default Verification;

const VerificationDate = (props) => {
  const {dataFormAppointment, hourAppointment, dateForm} = props;
  const showDateClient = dateForm?.split("-");
  return (
    <section className="confirm-appointment-card">
      <div>
        <strong>servicio:</strong>
        <em>{dataFormAppointment?.service}</em>
      </div>
      <div>
        <strong>Taller:</strong>
        <span>{dataFormAppointment?.workshop}</span>
      </div>
      <div>
        <strong>Fecha y Hora:</strong>
        <span>{`${showDateClient[2]}/${showDateClient[1]}/${showDateClient[0]} ${hourAppointment !== "1pm"? "a las":"a la"} ${ hourAppointment}`}</span>
      </div>
      <div>
        <strong>Orden de atencion:</strong>
        <span>{dataFormAppointment?.order_attention}</span>
      </div>
      <div>
        <strong>Recojo a domicilio:</strong>
        <span>{dataFormAppointment?.pick_up?"Si":"No"}</span>
      </div>
      <div>
        <strong>Tipo de Vehiculo:</strong>
        <span>{dataFormAppointment?.vehicle_type}</span>
      </div>
      <div>
        <strong>Descripcion</strong>
        <div>
          <span>{dataFormAppointment?.description}</span>
        </div>
      </div>
    </section>
  );
}

