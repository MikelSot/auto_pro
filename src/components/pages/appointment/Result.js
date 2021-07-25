import { Space } from "antd";
import { Alert } from "antd";
import React from "react";
import { Container, Row } from "react-bootstrap";

import {Link} from "react-router-dom";

const Result = () => {

  return (
    <>
      <Container fluid>
        <Row>
          <div className="section-result-appointment">
            <Space size={25} direction="vertical">
              <Alert
                message="Se ha reservado su cita correctamente, gracias por confiar en nosotros."
                type="success"
                showIcon
              />
              <div className="d-flex container-name">
                <Space size={300}>
                  <Link to="/">
                    Sacame de aqui
                  </Link>
                </Space>
              </div>
              <Alert
                message="NOTA:"
                description="Acuda al taller con la constancia de la reservación de cita para agilizar el servicio."
                type="info"
                showIcon
              />
            </Space>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Result;
