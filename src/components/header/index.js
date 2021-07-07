import React, {useState} from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Path from "./Path";
import Login from "./login";
import SignIn from "./signin/ModalSignin";
import "./index.scss";

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
        <header className="header-autoPro">
           <Nav openModal={openModal} setShowModal={setShowModal}/>
           <Path openModal={openModal} setShowModal={setShowModal}/>
        </header>
        <Login showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
        <SignIn showModal={showModal} setShowModal={setShowModal} contentModal={contentModal}/>
      </>
    );
}



const scrool =()=>{
    window.addEventListener('scroll', (e) => {
        console.log(e.currentTarget.scrollY)
        const id = document.getElementById('header-autoPro');
        if (e.currentTarget.scrollY > 100) {
            id.style.display= 'none';
        }

        if (e.currentTarget.scrollY < 90) {
            id.style.display= 'flex';
            id.style.transition= '1s'
        }
    });
}
scrool();