import {API_HOST, TOKEN} from "../utils/globals";
import jwtDecode from "jwt-decode";

export const LoginApi = (client) => {
    const url = `${API_HOST}/v1/login`
    const clientTemp = {
        ...client,
        email:client.email.toLowerCase()
    }
    const params = {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clientTemp)
    }

    return fetch(url, params).then(response =>{
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};

export const setTokenApi = (data) =>{
    localStorage.setItem(TOKEN, data)
}

export const getTokenApi= () =>{
    return localStorage.getItem(TOKEN);
}


export const logoutApi = () => {
    localStorage.removeItem(TOKEN)
}

export const isExpired = (token) =>{
    const { exp } = jwtDecode(token);
    const expire = exp *1000; // a milisegundos
    const timeout = expire - Date.now();
    if(timeout < 0){
        return true; // a caducado
    }
    return false
}

export const isClientLogEdApi = () => {
    const token = getTokenApi()

    if (!token){
        logoutApi()
        return null;
    }

    if (isExpired(token)){
        logoutApi()
    }

    return  jwtDecode(token)
}



