import React from 'react';
import Head from "../../header";
import Footer from "../../footer";
import StepEjemplo from "./Step";
import 'antd/dist/antd.css';
import "./Appointment.scss";
import {MenuLeftInit} from "../../header/utils/pathLeft";
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
                            <h1>ADMIN CTM</h1>
                        </section>
                    </>
                );
            case ROLE_CLIENT:
                return (
                    <>
                        <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
                        <MenuLeftInit/>
                        <section className="right-sidebar">
                            <StepEjemplo />
                        </section>
                        <Footer/>
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
