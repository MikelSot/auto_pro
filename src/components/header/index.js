import React, {useState} from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Path from "./Path";
import Login from "./login";
import SignIn from "./signin/ModalSignin";
import "./index.scss";
import {ToastContainer} from 'react-toastify'
import {ROLE_ADMIN, ROLE_CLIENT} from "../../utils/globals";


export default function Head(props){
    const [showModal, setShowModal] =useState(false)
    const [contentModal, setContentModal] =useState(null)

    const openModal = (content) => {
        setShowModal(true);
        setContentModal(content)
    }
    if (!props.client){
        return(
            <>
                <Header client={props.client}/>
                <header className="header-autoPro">
                    <Nav openModal={openModal} setShowModal={setShowModal}  setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                    <Path openModal={openModal} setShowModal={setShowModal}/>
                </header>
                <Login showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
                <SignIn showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </>
        );
    }else{
        switch (props.client.role){
            case ROLE_ADMIN:
                return (
                    <>
                        <Header client={props.client}/>
                        <header className="header-autoPro">
                            <Nav openModal={openModal} setShowModal={setShowModal} setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                        </header>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange
                            draggable
                            pauseOnHover
                        />
                    </>
                );
            case ROLE_CLIENT:
                return (
                  <>
                      <Header client={props.client}/>
                      <header className="header-autoPro">
                          <Nav openModal={openModal} setShowModal={setShowModal} setRefreshLogin={props.setRefreshLogin} client={props.client}/>
                      </header>
                      <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnVisibilityChange
                          draggable
                          pauseOnHover
                      />
                  </>
                );
        }
    }


}

