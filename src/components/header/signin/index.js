import React from 'react';
import ModalSignIn from "./ModalSignin";

const SignIn = (props) => {
    const {showModal, setShowModal, contentModal} = props;
    return (
        <>
            <ModalSignIn
                show={showModal}
                setShow={setShowModal}
            >
                {contentModal}
            </ModalSignIn>
        </>
    );
};

export default SignIn;