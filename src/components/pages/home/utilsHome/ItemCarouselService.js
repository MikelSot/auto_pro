import React, {useEffect, useState} from "react";
import {AllServicesHomeApi} from "../../../../api/ServicesApi";
import {Link} from "react-router-dom";
import {API_HOST} from "../../../../utils/globals";
import {toast} from "react-toastify";
import {map} from "lodash";
import "../SomeServices.scss";

export const ItemsCarouselService = () => {
    const [showServiceHome, setShowServiceHome] = useState(null);
    useEffect(()=>{
        AllServicesHomeApi().then(response =>{
            setShowServiceHome(response)
            // if (!response) {toast.error("Servicios no disponibles")}
        }).catch(()=>{
            toast.error("Servicios no disponibles")
        })
    },[])

    if (showServiceHome){
        return showServiceHome.data
    };
}


export const DivItemsHome= (props) =>{
    const {values}= props;
    return(
        <>
             <div className="someServices-item" >
            {
                map(values, value =>(
                        <div className="someServices-content" key={value.id}>
                            <Link to={`/service/${value.id}`} >
                                <img
                                    className="d-block w-100"
                                    src={`${API_HOST}${value.picture}`}
                                    alt={value.description}
                                />
                                {console.log(typeof value)}
                            </Link>
                        </div>
                ))
            }
             </div>

        </>
    );
}