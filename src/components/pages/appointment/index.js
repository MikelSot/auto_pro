import React from 'react';
import Head from "../../header";
import Footer from "../../footer";

export default function Appointment(props){
    return (
        <>
            <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
            <h2>cita p</h2>
            <Footer/>
        </>
    );
}