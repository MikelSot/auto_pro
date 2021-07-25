import React, {useState} from "react";
import { Steps, Button } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import CalendarForm from "./Calendar";
import Verification from "./Verification";
import FormAppointment from "./Form";


const { Step } = Steps;

const StepEjemplo = () => {
  const [dataFormAppointment, setDataFormAppointment] =  useState(initialFormAppointment())
  const [dateForm, setDateForm ] = useState(dateNow());
  const [hourAppointment, setHourAppointment] = useState("8am");

  const [current, setCurrent] = React.useState(0);
  const steps = [
    {
      title: "Datos personales",
      content: <FormAppointment  setDataFormAppointment={setDataFormAppointment} dataFormAppointment={dataFormAppointment}/>,
      icon: <UserOutlined />,
    },
    {
      title: "Fecha y hora",
      content: <CalendarForm dateForm={dateForm} setDateForm={setDateForm} hourAppointment={hourAppointment} setHourAppointment={setHourAppointment}/>,
      icon: <CalendarOutlined />,
    },
    {
      title: "Verificación",
      content: <Verification dataFormAppointment={dataFormAppointment} dateForm={dateForm} hourAppointment={hourAppointment}/>,
      icon: <SolutionOutlined />,
    },
  ];


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const init = () => {
    setCurrent(0);
  };


  return (
    <>
      <div className="section-appointment-container">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Siguiente
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => init()}
            >
              Nueva Cita
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Atrás
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default StepEjemplo;



function initialFormAppointment(){
  return{
    workshop:"",
    service:"",
    description:"",
    date_hour :"",
    order_attention:"",
    vehicle_type:"",
    pick_up :false,
    client_id: 0
  };
}

const dateNow =()=>{
  const now = new Date;
  const month = now.getMonth()+1
  const day = now.getDate()
  const year = now.getFullYear()
  let date;
  if (month < 10){
   date = `${year}-0${month}-${day}`
  }else {
    date = `${year}-${month}-${day}`
  }
  return date
}