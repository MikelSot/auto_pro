import React from 'react';
import Head from "../../header";
import Slider from "./Slider";
import Features from "./Features";
import About from "./About";
import SomeServices from "./SomeServices";
import SomeProducts from "./SomeProducts";

export default function Home(){
    return (
        <>
            <Head/>
            <Slider/>
            <Features/>
            <About/>
            <SomeServices/>
            <SomeProducts/>
        </>
    );
}
