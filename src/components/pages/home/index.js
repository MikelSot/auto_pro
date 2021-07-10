import React from 'react';
import Head from "../../header";
import Slider from "./Slider";
import Features from "./Features";
import About from "./About";
import SomeServices from "./SomeServices";
import SomeProducts from "./SomeProducts";
import Team from "./Team";
import Footer from "../../footer";
import Map from "./Map";

export default function Home(props){

    return (
        <>
            <Head setRefreshLogin ={props.setRefreshLogin} client={props.client}/>
            {
                props.client?(
                    <></>
                ):(
                    <>
                        <Slider/>
                        <Features/>
                        <About/>
                        <SomeServices/>
                        <SomeProducts/>
                        <Team/>
                        <Map/>
                        <Footer/>
                    </>
                )
            }
        </>
    );
}
