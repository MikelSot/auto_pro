import React, {useState} from 'react';
import {Carousel, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {ItemsCarouselProduct} from "./utilsHome/ItemsCarouselProduct";
import {DivItemsHome} from "./utilsHome/ItemCarouselService";


const SomeProducts = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const data =ItemsCarouselProduct()
    const firstPart = data?.slice(0,data.length/2);
    const secondPart = data?.slice(data.length/2, data.length)

    return (
        <>
            <Container fluid>
                <section className="someServices-header">
                    <h2>PRODUCTOS</h2>
                    <div className="someServices-header-button">
                        <Link to="/product">
                            <button className="someServices-button-home">Ver Todos <FontAwesomeIcon icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </section>
                <section className="someServices-body">
                    <Carousel activeIndex={index} onSelect={()=>handleSelect()}>
                        <Carousel.Item>
                            <DivItemsHome values={firstPart}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <DivItemsHome values={secondPart}/>
                        </Carousel.Item>
                    </Carousel>
                </section>
            </Container>
        </>
    );
};

export default SomeProducts;