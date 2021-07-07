import React, {useState} from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Path from "./Path";
import Login from "./login";
import SignIn from "./signin/ModalSignin";

export default function Head(){
    const [showModal, setShowModal] =useState(false)
    const [contentModal, setContentModal] =useState(null)

    const openModal = (content) => {
        setShowModal(true);
        setContentModal(content)
    }

    return(
      <>
        <Header/>
        <Nav openModal={openModal} setShowModal={setShowModal}/>
        <Path openModal={openModal} setShowModal={setShowModal}/>
        <Login showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
        <SignIn showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
      </>
    );
}