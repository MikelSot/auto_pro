import React from 'react';
import Head from "../../header";
import Footer from "../../footer";
import HeadContentService from "./HeadContentService";

export default function Service(){
    return (
        <>
            <Head/>
            <HeadContentService/>
            <Footer/>
        </>
    );
}