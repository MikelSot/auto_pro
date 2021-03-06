import {API_HOST, GET} from "../utils/globals";

export const AllServicesHomeApi = () =>{
    const url = `${API_HOST}/v1/service-home/0`;
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

export const AllServicesAppointmentFormApi = () =>{
    const url = `${API_HOST}/v1/service-home/15`;
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

