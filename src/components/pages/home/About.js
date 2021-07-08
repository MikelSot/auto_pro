import React from 'react';
import {Container} from 'react-bootstrap';
import "./About.scss";
import ImgAbout from '../../../assets/img/slider/pexels-cottonbro-4489749.jpg';

const About = () => {
    return (
        <Container fluid>
            <header className="header-about">
                <h2 className="title-features">About</h2>
                <p>consec delectus facere nisi, odio totam vitae! Ut!</p>
            </header>
            <div className="container-about">
                 <section className="content-about">
                    <div className="content-about-left">
                        <img src={ImgAbout} alt=""/>
                    </div>
                     <div className="content-about-right">
                         <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores assumenda autem consequatur delectus impedit, itaque labore quibusdam. Deserunt eius iusto laudantium nihil nisi quibusdam voluptates voluptatibus! Ab aliquid amet animi architecto at corporis culpa deserunt distinctio doloribus eaque enim error facilis fuga illo incidunt inventore ipsa laboriosam molestias nisi nulla officiis placeat porro quae quam quis rem, sapiente sed sunt suscipit tempora vel veritatis voluptas voluptate? Cumque, repellat, vero.</em>
                         <div>
                            <a href="/workshop">
                                <button>Ver Sucursales</button>
                            </a>
                         </div>
                     </div>
                 </section>
            </div>
        </Container>
    );
};

export default About;