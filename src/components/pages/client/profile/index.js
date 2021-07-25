import React, {useEffect, useState} from "react";
import client from "../../../../hooks/client";
import "./index.scss";
import { MenuLeftInit } from "../../../header/utils/pathLeft";
import { Image, Button, List, Alert } from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCamera, faFileAlt, faFileArchive, faFileInvoice, faUser} from "@fortawesome/free-solid-svg-icons";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import SectionAppointment from "../appointment/History";
import SectionReview from "../review/review";
import SectionInvoice from "../invoice/Invoice";
import Head from "../../../header";
import {ROLE_CLIENT} from "../../../../utils/globals";
import {GetDataClientByID} from "../../../../api/client";
import {toast} from "react-toastify";

const ProfileIndex = (props) => {
    const myClient = client();
    const [showDataClient, setShowDataClient] = useState(null);
    useEffect(()=>{
        GetDataClientByID(props.client.id).then(response =>{
            setShowDataClient(response.data)
        }).catch(()=>{
            toast.error("Reviews no disponibles");
        });
    }, [])

    const [pagueView, setPagueView] = React.useState(
        <Alert message="->" type="info" />
    );

    const ViewSectionProfile = () => {
        setPagueView(
            <Alert message="->" type="info" />
        );
    };

    const ViewSectionAppointment = () => {
        setPagueView(<SectionAppointment myClient={myClient}/>);
    };

    const ViewSectionReview = () => {
        setPagueView(<SectionReview myClient={myClient}/>);
    };

    const ViewSectionInvoice = () => {
        setPagueView(<SectionInvoice />);
    };

    const data = [
        <Button type="link" icon={<FontAwesomeIcon icon={faUser}/>} onClick={ViewSectionProfile} className="icons-profile-right-index">
            Perfil
        </Button>,
        <Button
            type="link"
            icon={<FontAwesomeIcon icon={faFileAlt}/>}
            onClick={ViewSectionAppointment}
            className="icons-profile-right-index"
        >
            Historial de citas
        </Button>,
        <Button type="link" icon={<FontAwesomeIcon icon={faFileArchive}/>} onClick={ViewSectionReview} className="icons-profile-right-index">
            Revisión técnica
        </Button>,
        <Button type="link" icon={<FontAwesomeIcon icon={faFileInvoice}/>} onClick={ViewSectionInvoice} className="icons-profile-right-index">
            Historial de compras
        </Button>
    ];
    return (
        <>
            <Head setRefreshLogin ={props.setRefreshLogin} client={props.client}/>
            <MenuLeftInit />
            <section className="right-sidebar">
                <div className="cover"></div>
                <div className="d-flex section-perfil-info-items">
                    <div className="card text-center profile-client-info-edit">
                        <div className="img-client-profile-edit">
                            <Image
                                className="img-client"
                                src="https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                            />
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<FontAwesomeIcon icon={faCamera}/>}
                                size="large"
                                className="btn-edit-image-profile"
                            />
                        </div>
                        <div className="card-body">
                            <div className="card-text h5">{showDataClient?.name} {showDataClient?.last_name}</div>
                            <div className="card-text">
                                <p>{props.client.uri}</p>
                            </div>
                            <div className="card-text card-left-profile-text">
                                <p>{
                                    props.client.role === ROLE_CLIENT?"Cliente":"Admin"
                                   }
                                </p>
                            </div>
                        </div>
                        <Link to={`/${myClient?.uri}/editprofile`}>
                            <Button
                                className="btn btn-edit-client card-text"
                                type="primary"
                                block
                            >
                                Editar perfil
                            </Button>
                        </Link>
                    </div>{" "}
                    <div className="profile-client-publication-view">{pagueView}</div>
                    <div className="profile-client-items-view">
                        <List
                            size="small"
                            bordered
                            dataSource={data}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                            className="link-items-profile"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileIndex;
