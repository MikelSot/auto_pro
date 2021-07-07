import React from 'react';
import ModalLogin from "./ModalLogin";

const Login = (props) => {
    const {showModal, setShowModal, contentModal} = props;
    return (
        <>
            <ModalLogin
            show={showModal}
            setShow={setShowModal}
            >
                {contentModal}
            </ModalLogin>
        </>
    );
};

export default Login;