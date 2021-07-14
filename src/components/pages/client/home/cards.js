import React from 'react';
import {Card} from "react-bootstrap";
import "./cards.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const Cardsclient = () => {
    return (
        <>
            <section className="view-review-home">
                <section className="view-all-client-home">
                    <div>
                        <h2>Reporte de revision tecnica</h2>
                    </div>
                    <div>
                        <Link>
                            <strong>ver todos los reviews<FontAwesomeIcon icon={faArrowRight}/></strong>
                        </Link>
                    </div>
                </section>
                <section className="card-client-home">
                    <Link>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Link>
                </section>
            </section>
        </>
    );
};

export default Cardsclient;