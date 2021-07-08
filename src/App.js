import React from 'react';
import './index.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/home";
import Service from "./components/pages/services";
import Product from "./components/pages/products";
import Blog from "./components/pages/blog";
import Appointment from "./components/pages/appointment";
import Workshop from "./components/pages/workshop";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/service" component={Service}/>
            <Route path="/product" component={Product}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/appointment" component={Appointment}/>
            <Route path="/workshop" component={Workshop}/>
            <Route component={()=>(
                <>
                    <h1>Error 404</h1>
                    <span>Pagina no encontrada</span>
                </>
            )}/>
        </Switch>
    </Router>
  );
}

export default App;
