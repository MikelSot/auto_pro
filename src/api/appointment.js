import {API_HOST, DELETE, GET, POST, PUT} from "../utils/globals";
import {getTokenApi} from "./loginApi.js";

export const AppointmentCreateApi = (data) => {
    const url = `${API_HOST}/v1/appointment`
    const params = {
        method:POST,
        headers:{
            "Content-Type": "application/json",
            "Authorization" : `${getTokenApi()}`
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};



export const AllAppointmentClientApi = (id, max) => {
    const url = `${API_HOST}/v1/appointment/${id}/${max}`

    const params = {
        method:GET,
        headers:{
            "Content-Type": "application/json",
            "Authorization" : getTokenApi()
        }
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};

export const UpdateStateAppointmentApi = (data, id) => {
    const url = `${API_HOST}/v1/appointment/state/${id}`

    const params = {
        method:PUT,
        headers:{
            "Content-Type": "application/json",
            "Authorization" : getTokenApi()
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};


export const GetAllAppointmentApi = (max) => {
    const url = `${API_HOST}/v1/appointment/all/${max}`

    const params = {
        method:GET,
        headers:{
            "Authorization" : getTokenApi()
        }
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};


export const DeleteAppointmentApi = (id) => {
    const url = `${API_HOST}/v1/appointment/${id}`

    const params = {
        method:DELETE,
        headers:{
            "Content-Type": "application/json",
            Authorization : getTokenApi()
        }
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};

export const UpdateAppointmentApi = (id, data) => {
    const url = `${API_HOST}/v1/appointment/${id}`

    const params = {
        method:PUT,
        headers:{
            "Content-Type": "application/json",
            Authorization : getTokenApi()
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};

export const AllOrderAttentionAvailable = () =>{
    const url = `${API_HOST}/v1/order-available-home/`;
    const params = {
        method:GET
    }
    return fetch(url, params).then(response =>{
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
}

