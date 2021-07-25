import React, {useEffect, useState} from "react";
import { Card, Typography, Space, Button } from "antd";
import "antd/dist/antd.css";
import "./History.scss";
import {AllAppointmentClientApi} from "../../../../api/appointment";
import {toast} from "react-toastify";
import {map} from "lodash";

const History = (props) => {
  const [showAppointments, setAppointments] = useState(null);
  useEffect(()=>{
      AllAppointmentClientApi(props.myClient.id, 50).then(response =>{
          setAppointments(response.data)
      }).catch(()=>{
          toast.error("Citas no disponibles");
      });
  }, [])

  const [pageNumber] = useState(0);
  const [countAppointmentView, setCountAppointmentView] = useState(3);
  const pagesVisited = pageNumber * countAppointmentView;

  const NextloadMore = () => {
    if (countAppointmentView <= showAppointments.length) {
      setCountAppointmentView(countAppointmentView + countAppointmentView);
    } else {
      let btnscrollinfinite = document.getElementById("btn-scroll-next-items");
      btnscrollinfinite.innerHTML = "Fin";
    }
  };

  let data =showAppointments?.slice(pagesVisited, pagesVisited+countAppointmentView)
  return (
      <>
        <Typography.Title level={2}>Historial de citas</Typography.Title>
        <div className="cards-history-appointment-client">
          {
              map(data,appointment=> (
                    <div className="item-card-appointment-history" key={appointment?.id}>
                      <Card className="card-history-appointment">
                        <Typography.Title level={4}>{appointment.service.toUpperCase()}</Typography.Title>
                        <Space size={10} direction="vertical">
                          <div className="item-info-history">
                            <div>
                              <b>Taller:</b> {appointment?.workshop}
                            </div>
                            <div>
                              <b>Recogo a domicilio:</b> {appointment?.pick_up?"Si":"No"}
                            </div>
                          </div>
                          <div className="item-info-history">
                            <div>
                              <b>Fecha:</b> {dateHour(appointment?.date_hour)}{" "}
                            </div>
                            <div>
                              <b>Orden de atención:</b> {appointment?.order_attention}{" "}
                            </div>
                          </div>
                          <div >
                              <b>Tipo de vehiculo:</b> {appointment?.vehicle_type}{" "}
                          </div>
                            <div><div><strong>Descripción:</strong></div>
                                <p style={{marginLeft:".5rem"}}>{appointment?.description} </p>
                            </div>
                        </Space>
                      </Card>
                    </div>
              ))}
        </div>
        <Button
            type="primary"
            block
            id="btn-scroll-next-items"
            onClick={NextloadMore}
        >
          Cargar más...
        </Button>
      </>
  );
};

export default History;

const dateHour =(date_hour)=>{
    const data = date_hour?.split(/([-:T])/);
    const date = `${data[4]}/${data[2]}/${data[0]}   ${data[6]}:${data[8]}`
    return date
}