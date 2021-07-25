/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import "../profile/index.scss";
import { Card, Typography, Space, Button } from "antd";
import "antd/dist/antd.css";
import {toast} from "react-toastify";
import {AllReviewClient} from "../../../../api/review";
import {map} from "lodash";


const reviewPage = (props) => {
  const [showReviews, setShowReviews] = useState(null);
  useEffect(()=>{
      AllReviewClient(props.myClient.id, 50).then(response =>{
          setShowReviews(response.data)
      }).catch(()=>{
          toast.error("Reviews no disponibles");
      });
  }, [])

  const [pageNumber] = useState(0);
  const [countReviewView, setCountReviewView] = useState(3);
  const pagesVisited = pageNumber * countReviewView;

  const NextloadMore = () => {
    if (countReviewView <= showReviews.length) {
      setCountReviewView(countReviewView + countReviewView);
    } else {
      let btnscrollinfinite = document.getElementById("btn-scroll-next-items");
      btnscrollinfinite.innerHTML = "Fin";
    }
  };

    let data =showReviews?.slice(pagesVisited, pagesVisited+countReviewView)

    return (
    <>
      <Typography.Title level={2}>
        Historial de revisión técnica
      </Typography.Title>
      <div className="cards-history-appointment-client">
        {
          map(data, review => (
              <div className="item-card-appointment-history">
                <Card className="card-history-appointment" key={review.id}>
                  <Typography.Title level={4}>
                    {review.services_vehicle.toUpperCase()}
                  </Typography.Title>
                  <Space size={10} direction="vertical">
                    <div>
                      <b>Tipo de vehículo: </b> {review.vehicle_type}
                    </div>
                    <div>
                      <b>Tipo de revisión: </b> {review.revision_type}
                    </div>
                    <div>
                      <b>Condición del vehículo: </b> {review.vehicle_condition}{" "}
                    </div>
                    <div>
                      <b>Recogo en: </b> {review.pick_up}{" "}
                    </div>
                    <div>
                      {" "}
                      <b>Requerimientos: </b> {review.requirements}{" "}
                    </div>
                    <div>
                      {" "}
                      <b>Preparativos: </b> {review.arrangements}{" "}
                    </div>
                    <div>
                      {" "}
                      <b>Fallas comunes: </b> {review.common_faults}{" "}
                    </div>
                    <div>
                      {" "}
                      <b>Características: </b> {review.car_features}{" "}
                    </div>
                    <div>
                      {" "}
                      <b>Análisis del téncico: </b> <br /> {review.technical_analysis}{" "}
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

export default reviewPage;
