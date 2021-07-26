import React from 'react';
import Head from "../../header";
import Footer from "../../footer";
import StepEjemplo from "./Step";
import 'antd/dist/antd.css';
import "./Appointment.scss";
import {MenuLeftInit} from "../../header/utils/pathLeft";
import AppointmentAdmin from "../admin/Appointment/Appointment";
import {ROLE_ADMIN, ROLE_CLIENT} from "../../../utils/globals";

export default function Appointment(props){
    if (props.client){
        switch (props.client.role){
            case ROLE_ADMIN:
                return (
                    <>
                        <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
                        <MenuLeftInit/>
                        <section className="right-sidebar">
                            <AppointmentAdmin />
                        </section>
                        <Footer/>
                    </>
                );
            case ROLE_CLIENT:
                return (
                    <>
                        <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
                        <MenuLeftInit/>
                        <section className="right-sidebar">
                            <StepEjemplo />
                        <Footer/>
                        </section>
                    </>
                );
        }
    }else{
        return (
            <>
                <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
                <StepEjemplo/>
                <Footer/>
            </>
        );
    }
}
