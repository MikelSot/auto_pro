import React from "react";
import {Alert, Calendar, Radio} from "antd";
import { Space } from "antd";
import { Container, Row } from "react-bootstrap";
import "./Appointment.scss";


const dateNow =()=>{
  const now = new Date;
  const month = now.getMonth()+1
  const day = now.getDate()
  const year = now.getFullYear()
  const date = `${year}-${month}-${day}`
  return date
}

export const CalendarForm = (props) =>{
  const {dateForm, setDateForm,hourAppointment, setHourAppointment } = props;
  const onSelect = (value) => {
    let month = value.months()+1
    let day = value.date()
    let sunday = value.day()
    if([0].includes(sunday)){
      console.log("dia no valido")
    }
    if(month < 10 ){
      month = `0${month}`
    }
    if (day < 10){
      day = `0${day}`
    }
    const date = `${value.year()}-${month}-${day}`;
    setDateForm(date);
  };

    return (
      <>
        <br/>
        <Container>
          <Row className="section-date-time">
            <div className="row products-items container-date">
              <div class="section-calendar-appointment">
                <Calendar
                    fullscreen={false}
                    onSelect={onSelect}
                    className="calendar-calendar"
                />
              </div>
              <TimerAppointmentSelected dateForm={dateForm} hourAppointment={hourAppointment} setHourAppointment={setHourAppointment}/>
            </div>
          </Row>
        </Container>
        <br/>
      </>
    );
}

export default CalendarForm;

const TimerAppointmentSelected = (props) => {
  const {hourAppointment, setHourAppointment, dateForm} = props;
  const showDateClient = dateForm?.split("-");
  const OnTimeChange = (e) => {
    let timerdate = e.target.value;
  };

  return (
    <>
      <div className="formulario-appointment">
        <Space size={25} direction="vertical">
          <div class="card-body p-0">
            <Radio.Group
              defaultValue="8am"
              buttonStyle="solid"
              onChange={OnTimeChange}
            >
              <div class="row products-items text-center mx-0">
                <div class="timer-item">
                  <Radio.Button
                    value="8am"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    8:00 am
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="9am"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    9:00 am
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="10am"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    10:00 am
                  </Radio.Button>
                </div>
              </div>{" "}
              <div class="row products-items text-center mx-0">
                <div class="timer-item">
                  <Radio.Button
                    value="11am"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    11:00 am
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="12pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    12:00 pm
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="1pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    1:00 pm
                  </Radio.Button>
                </div>
              </div>{" "}
              <div class="row products-items text-center mx-0">
                <div class="timer-item">
                  <Radio.Button
                    value="2pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    2:00 pm
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="3pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    3:00 pm
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="4pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    4:00 pm
                  </Radio.Button>
                </div>
              </div>{" "}
              <div class="row products-items text-center mx-0">
                <div class="timer-item">
                  <Radio.Button
                    value="5pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    5:00 pm
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="6pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    6:00 pm
                  </Radio.Button>
                </div>
                <div class="timer-item">
                  <Radio.Button
                    value="7pm"
                    className="item-timer-select"
                    onChange={(e) =>
                      setHourAppointment(e.target.value)
                    }
                  >
                    7:00 pm
                  </Radio.Button>
                </div>
              </div>
            </Radio.Group>
          </div>
          <Alert
              message={`Fecha y Hora seleccionada: ${showDateClient[2]}/${showDateClient[1]}/${showDateClient[0]} ${hourAppointment !== "1pm"? "a las":"a la"} ${ hourAppointment} `}
              type="info"
          />
        </Space>
      </div>
    </>
  );
};
