import React from 'react';
import {Modal} from 'react-bootstrap';
import "./ModalSignin.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

const ModalSignIn = (props) => {
    const {show, setShow, children} = props;

    return (
        <Modal
            className="modal-signIn"
            onHide={()=> setShow(false)}
            show={show}
            centered
            size="md"
        >
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default ModalSignIn;