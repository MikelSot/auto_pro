import React, {useState} from 'react';
import Head from "../../header";
import Slider from "./Slider";
import Features from "./Features";
import About from "./About";
import SomeServices from "./SomeServices";
import SomeProducts from "./SomeProducts";
import Team from "./Team";
import Footer from "../../footer";
import Map from "./Map";
import {MenuLeftInit} from "../../header/utils/pathLeft";
import HomeClientIndex from "../client/home";
import "./index.scss";

export default function Home(props){

    return (
        <>
            <Head setRefreshLogin ={props.setRefreshLogin} client={props.client}/>
            {
                props.client?(
                    <>
                        <MenuLeftInit/>
                        <section className="right-sidebar">
                            <HomeClientIndex/>
                        </section>
                    </>
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
