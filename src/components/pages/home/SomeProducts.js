import React, {useState} from 'react';
import {Carousel, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ImgSomeProduct_1 from "../../../assets/img/slider/mature-2875251_1920.jpg";
import ImgSomeProduct_2 from "../../../assets/img/slider/pexels-cottonbro-4480531.jpg";
import ImgSomeProduct_3 from "../../../assets/img/slider/pexels-pixabay-162553.jpg";
import ImgSomeProduct_4 from "../../../assets/img/slider/mqdefault.jpg";
import ImgSomeServices_5 from "../../../assets/img/slider/auto-repair-3691962_1280.jpg";
import ImgSomeServices_6 from "../../../assets/img/slider/auto-2861859_1920.jpg";

const SomeProducts = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            <Container fluid>
                <section className="someServices-header">
                    <h2>Some Products</h2>
                    <div className="someServices-header-button">
                        <Link to="/product">
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
                                            src={ImgSomeProduct_1}
                                            alt="First slide"
                                        />
                                    </Link>
                                </div>
                                <div className="someServices-content">
                                    <Link to="/service">
                                        <img
                                            className="d-block w-100"
                                            src={ImgSomeProduct_2}
                                            alt="First slide"
                                        />
                                    </Link>
                                </div>
                                <div className="someServices-content">
                                    <Link to="/service">
                                        <img
                                            className="d-block w-100"
                                            src={ImgSomeProduct_3}
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
                                            src={ImgSomeProduct_4}
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

export default SomeProducts;