import React, {useState} from 'react';
import {Carousel, Container} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import "./SomeServices.scss";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ImgSomeServices_1 from '../../../assets/img/slider/pexels-chevanon-photography-1108101.jpg';
import ImgSomeServices_2 from '../../../assets/img/slider/pexels-andrea-piacquadio-3806249.jpg';
import ImgSomeServices_3 from '../../../assets/img/slider/pexels-cottonbro-4489743.jpg';
import ImgSomeServices_4 from '../../../assets/img/slider/hands-of-car-mechanic-with-wrench-in-garage.jpg';
import ImgSomeServices_5 from '../../../assets/img/slider/auto-repair-3691962_1280.jpg';
import ImgSomeServices_6 from '../../../assets/img/slider/auto-2861859_1920.jpg';

const SomeServices = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <>
         <Container fluid>
             <section className="someServices-header">
                 <h2>Some Services</h2>
                 <div className="someServices-header-button">
                     <Link to="/service">
                         <button className="someServices-button-home">Ver Todos <FontAwesomeIcon icon={faArrowRight}/></button>
                     </Link>
                 </div>
             </section>
             <section className="someServices-body">
                 <Carousel activeIndex={index} onSelect={()=>handleSelect()}>
                     <Carousel.Item>
                         <div className="someServices-item">
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_1}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_2}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_3}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                         </div>
                     </Carousel.Item>
                     <Carousel.Item>
                         <div  className="someServices-item">
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_4}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_5}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                             <div className="someServices-content">
                                 <Link to="/service">
                                     <img
                                         className="d-block w-100"
                                         src={ImgSomeServices_6}
                                         alt="First slide"
                                     />
                                 </Link>
                             </div>
                         </div>
                     </Carousel.Item>
                 </Carousel>
             </section>
         </Container>
        </>
    );
};

export default SomeServices;

