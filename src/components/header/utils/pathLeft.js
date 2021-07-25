import React, {useState} from 'react';
import "./PahtLeft.scss";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBoxes, faCalendarCheck, faFan, faHome, faStickyNote, faTools} from "@fortawesome/free-solid-svg-icons";


export const MenuLeftInit =()=>{
    const [over, setOver] = useState(false)
        const inside =()=>{
        document.getElementById("sidebar-menu").classList.add("sidebar-menu-show")
        setOver(true)
    }

    const outSite =()=>{
        document.getElementById("sidebar-menu").classList.remove("sidebar-menu-show")
        setOver(false)
    }

     return (
         <>
             <aside className="sidebar-menu" id="sidebar-menu" onMouseOver={inside} onMouseOut={outSite}>
                 <section className="container-sidebar">
                     <div className="content-sidebar">
                        <Link to="/">
                            <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faHome}/>
                            </div>
                            {
                                over?(
                                    <>
                                        <div className="title-sidebar">
                                            <strong>Inicio</strong>
                                        </div>
                                    </>

                                ):<></>
                            }
                        </Link>
                     </div>
                     <div className="content-sidebar">
                         <Link to="/appointment">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faCalendarCheck}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>Citas</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                     <div className="content-sidebar">
                         <Link to="/service">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faTools}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>Servicios</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                 </section>
                 <section className="container-sidebar">
                     <div className="content-sidebar">
                         <Link to="/product">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faBoxes}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>Productos</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                     <div className="content-sidebar">
                         <Link to="/">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faStickyNote}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>Blog</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                     <div className="content-sidebar">
                         <Link to="/">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faFan}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>auto Prod</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                 </section>
                 <section className="container-sidebar">
                     <div className="content-sidebar">
                         <Link to="/">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faFan}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>auto Prod</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                     <div className="content-sidebar">
                         <Link to="/">
                             <div className="sidebar-icon">
                                 <FontAwesomeIcon icon={faFan}/>
                             </div>
                             {
                                 over?(
                                     <div className="title-sidebar">
                                         <strong>auto Prod</strong>
                                     </div>
                                 ):<></>
                             }
                         </Link>
                     </div>
                 </section>
             </aside>
         </>
     );
};