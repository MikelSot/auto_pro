import React, {useEffect, useState} from 'react';
import "./Appointment.scss";
import {appointment} from "./AdminAppointment.json"
import {Button, List, Card, Typography, Select, Space, message} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faFileArchive, faFileInvoice, faUser} from "@fortawesome/free-solid-svg-icons";
import AdminReview from "../Review/Review";
import {GetAllAppointmentApi} from "../../../../api/appointment";
import {toast} from "react-toastify";

const {Option} = Select;

const key = 'updatable';

function onChange(value) {
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}



const AppointmentAdmin = () => {

    const SectionAppointmentConfirm = () => {
        return (
            <>
                <div className="container-admin-appointment">
                    <Typography.Title level={2}>Citas por confirmar</Typography.Title>
                    <Space direction="vertical">

                        {appointment
                            .slice(pagesVisited, pagesVisited + countAppointmentView)
                            .map((elem) => {
                                const {
                                    id,
                                    workshop,
                                    service,
                                    description,
                                    dateHour,
                                    orderAttention,
                                    pickUp,
                                    status,
                                    client,
                                } = elem;
                                return (

                                    <Card className="container-client-confirm-card" key={id}>
                                        <div className="admin-appointment-info-confirm">
                                            <Typography.Title level={4}>Datos:</Typography.Title>
                                            <div className="container-confirm-admin">
                                                <Space>
                                                    <Typography.Title level={4}>Estado: </Typography.Title>
                                                    <Select
                                                        showSearch
                                                        style={{width: 200}}
                                                        placeholder={status}
                                                        optionFilterProp="children"
                                                        onChange={onChange}
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        <Option value="confirmar">
                                                            <Typography.Text>Confirmar</Typography.Text>
                                                        </Option>
                                                        <Option value="rechazar">
                                                            <Typography.Text>Rechazar</Typography.Text>
                                                        </Option>
                                                        <Option value="espera">
                                                            <Typography.Text>En espera</Typography.Text>
                                                        </Option>
                                                    </Select></Space>
                                            </div>
                                        </div>
                                        <div className="admin-apointment-data-client">
                                            <Space direction="vertical" className="w-100">
                                                <Space>
                                                    <Typography.Text strong>Fecha y hora:</Typography.Text>
                                                    <Typography.Text>{dateHour}</Typography.Text>
                                                </Space>
                                                <Space>
                                                    <Typography.Text strong>Nombre:</Typography.Text>
                                                    <Typography.Text>{client}</Typography.Text>
                                                </Space>
                                                <Space>
                                                    <Typography.Text strong>Correo:</Typography.Text>
                                                    <Typography.Text>juan123@gmail.com</Typography.Text>
                                                </Space>
                                                <Space>
                                                    <Typography.Text strong>Servicio:</Typography.Text>
                                                    <Typography.Text>{service}</Typography.Text>
                                                </Space>
                                                <Space>
                                                    <Typography.Text strong>Taller:</Typography.Text>
                                                    <Typography.Text>{workshop}</Typography.Text>
                                                </Space>
                                                <Space className="admin-btn-result-appointment">
                                                    <div>
                                                        <Typography.Text strong>Recoger:</Typography.Text>
                                                        <Typography.Text>{pickUp}</Typography.Text>
                                                    </div>
                                                    <Button type="primary"
                                                            onClick={() => SendResulAppointmentClient()}
                                                            loading={loading}>
                                                        Enviar resultado
                                                    </Button>
                                                </Space>
                                            </Space>
                                        </div>
                                    </Card>
                                );
                            })}
                        <Button
                            type="primary"
                            block
                            id="btn-scroll-next-items"
                            onClick={NextloadMore}
                        >
                            Cargar más...
                        </Button>
                    </Space>
                </div>
            </>
        );
    }

    const SectionReviewConfirmAdmin = () => {
        setViewPage(<AdminReview/>);
    }

    const SectionAppointmentConfirmAdmin = () => {
        setViewPage(<SectionAppointmentConfirm/>);
    }

    const [viewPage, setViewPage] = React.useState(<SectionAppointmentConfirm/>);

    const [items] = React.useState(appointment.slice());

    const [loading, setLoading] = React.useState(false)

    const [pageNumber] = React.useState(0);

    const [countAppointmentView, setCountAppointmentView] = React.useState(4);

    const pagesVisited = pageNumber * countAppointmentView;

    const NextloadMore = () => {
        if (countAppointmentView <= items.length) {
            setCountAppointmentView(countAppointmentView + countAppointmentView);
        } else {
            let btnscrollinfinite = document.getElementById("btn-scroll-next-items");
            btnscrollinfinite.innerHTML = "Fin";
        }
    };

    const SendResulAppointmentClient = () => {
        setLoading(true);
        message.loading({content: 'Loading...', key});
        setTimeout(() => {
            message.success({content: 'Loaded!', key, duration: 2});
        }, 1000);
        setLoading(false);
    }

    const data = [
        <Button
            type="link"
            icon={<FontAwesomeIcon icon={faFileAlt}/>}
            onClick={() => SectionAppointmentConfirmAdmin()}
            className="icons-profile-right-index"
        >
            Citas
        </Button>,
        <Button type="link" icon={<FontAwesomeIcon icon={faFileArchive}/>}
                onClick={() => SectionReviewConfirmAdmin()}
                className="icons-profile-right-index">
            Revisión técnica
        </Button>,

    ];

    return (
        <>
            <div className="cover"></div>
            <div className="section-admin-appointment">
                <Card>
                    <div className="container-appointment-review-admin">
                        {viewPage}
                    </div>
                </Card>
                <div className="container-admin-links">
                    <List
                        size="small"
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                        className="link-items-profile"
                    />
                </div>
            </div>
        </>
    );
};

export default AppointmentAdmin;