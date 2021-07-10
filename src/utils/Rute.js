import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/pages/home";
import Service from "../components/pages/services";
import Product from "../components/pages/products";
import Blog from "../components/pages/blog";
import Appointment from "../components/pages/appointment";
import Workshop from "../components/pages/workshop";

const Rute = (props) => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    <Route path="/service">
                        <Service setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    <Route path="/product">
                        <Product setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    <Route path="/blog">
                        <Blog setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    <Route path="/appointment">
                        <Appointment setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    <Route path="/workshop">
                        <Workshop setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    </Route>
                    {
                        props.client?(
                            <>
                                <Route path={`/${props.client?.uri}`} exact>
                                    <h2>PERFIL</h2>
                                </Route>
                                <Route path="/service">
                                    <h2>OTRA COSA</h2>
                                </Route>
                            </>
                        ):<></>
                    }
                    <Route component={()=>(
                        <>
                            <h1>Error 404</h1>
                            <span>Pagina no encontrada</span>
                        </>
                    )}/>

                </Switch>
            </Router>
        </>
    );
};

export default Rute;