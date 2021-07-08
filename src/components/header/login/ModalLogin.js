import React from 'react';
import {Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./ModalLogin.scss";
import {faChild} from "@fortawesome/free-solid-svg-icons";

const ModalLogin = (props) => {
    const {show, setShow, children} = props;

    return (
        <Modal
            className="modal-login"
            onHide={()=> setShow(false)}
            show={show}
            centered
            size="md"
        >
            <Modal.Header>
                <Modal.Title>
                    <FontAwesomeIcon icon={faChild}/>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default ModalLogin;