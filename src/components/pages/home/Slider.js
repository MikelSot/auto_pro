import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Slicer.scss";
import {SLICE_IMG_ONE, SLICE_IMG_THREE, SLICE_IMG_TWO} from "../../../utils/slice";
const Slider = () => {
    return (
        <>
           <Carousel>
               <Carousel.Item>
                   <img
                       style={{background:"red"}}
                       className="d-block image-Slicer"
                       alt="Hombre, Coche, Reparación, Reparación De Automóviles"
                       src={SLICE_IMG_ONE}
                   />
                   <Carousel.Caption>
                       <h3>Mecánico de coches</h3>
                       <p>Servicio de reparación del motor</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block image-Slicer"
                       src={SLICE_IMG_TWO}
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
                       src={SLICE_IMG_THREE}
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