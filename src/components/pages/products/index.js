import React from 'react';
import Head from "../../header";
import Footer from "../../footer";

export default function Product(props){
    return (
        <>
            <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>

            <Footer/>
        </>
    );
}