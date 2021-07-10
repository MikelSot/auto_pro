import React from 'react';
import Head from "../../header";
import Footer from "../../footer";
import HeadContentService from "./HeadContentService";

export default function Service(props){

    return (
        <>
            <Head client={props.client} setRefreshLogin={props.setRefreshLogin}/>
            <HeadContentService/>
            <Footer/>
        </>
    );
}