import {useEffect, useState} from "react";
import {AllServicesAppointmentFormApi} from "../../../../api/ServicesApi";
import {toast} from "react-toastify";
import {AllWorkshopAppointmentFormApi} from "../../../../api/workshop";
import {AllOrderAttentionAvailable} from "../../../../api/appointment";

export const SelectServiceFromAppointment = () => {
    const [serviceFrom, setServiceForm] = useState(null);
    useEffect(()=>{
        AllServicesAppointmentFormApi().then(response =>{
            setServiceForm(response)
        }).catch(()=>{
            toast.error("Servicios no disponibles")
        })
    },[])
    if (serviceFrom){
        return serviceFrom.data
    };
}


export const SelectWorkshopFromAppointment = () => {
    const [workshopForm, setWorkshopForm] = useState(null);
    useEffect(()=>{
        AllWorkshopAppointmentFormApi().then(response =>{
            setWorkshopForm(response)
        }).catch(()=>{
            toast.error("sucursales no disponibles")
        })
    },[])
    if (workshopForm){
        return workshopForm.data
    };
}


export const SelectOrderFromAppointment = () => {
    const [orderForm, setOrderForm] = useState(null);
    useEffect(()=>{
        AllOrderAttentionAvailable().then(response =>{
            setOrderForm(response)
        }).catch(()=>{
            toast.error("Servicios no disponibles")
        })
    },[])
    if (orderForm){
        return orderForm.data
    };
}
