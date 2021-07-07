import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Slicer.scss";
import ImgSlideMan from '../../../assets/img/slider/man-362150_1920.jpg';
import ImgSlideAutoRepair from '../../../assets/img/slider/pexels-cottonbro-4488640.jpg';
import ImgSlideAuto from '../../../assets/img/slider/pexels-malte-luk-2244746.jpg';
const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{background:"red"}}
                        className="d-block image-Slicer"
                        alt="Hombre, Coche, Reparación, Reparación De Automóviles"
                        src={ImgSlideMan}
                    />
                    <Carousel.Caption>
                        <h3>Mecánico de coches</h3>
                        <p>Servicio de reparación del motor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image-Slicer"
                        src={ImgSlideAutoRepair}
                        alt="Hombre, Coche, Reparación, Reparación De Automóviles"
                    />

                    <Carousel.Caption>
                        <h3>Taller mecánico de calidad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block image-Slicer"
                        src={ImgSlideAuto}
                        alt="Hombre, Coche, Reparación, Reparación De Automóviles"
                    />

                    <Carousel.Caption>
                        <h3>Mecánico arreglando un coche</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;