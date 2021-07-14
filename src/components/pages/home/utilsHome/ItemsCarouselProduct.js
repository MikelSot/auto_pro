import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {AllProductHomeApi} from "../../../../api/ProductsApi";

export const ItemsCarouselProduct = () => {
    const [showProductHome, setShowProductHome] = useState(null);
    useEffect(()=>{
        AllProductHomeApi().then(response =>{
            setShowProductHome(response)
        }).catch(()=>{
            toast.error("Productos no disponibles")
        })
    },[])

    if (showProductHome){
        return showProductHome.data
    };
}