import {API_HOST, GET, POST, PUT} from "../utils/globals";
import {getTokenApi} from "./loginApi";



export const GetDataClientByID = (id) => {
    const url = `${API_HOST}/v1/client/${id}`
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

export const EditDataClient = (dataClient) => {
    const url = `${API_HOST}/v1/client/edit-profile`
    const params = {
        method:PUT,
        headers:{
            "Content-Type": "application/json",
            "Authorization" : getTokenApi()
        },
        body: JSON.stringify(dataClient)
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};


export const UploadAvatarClient = (file) => {
    const url = `${API_HOST}/v1/client/upload-file`
    const formData = new FormData();
    formData.append("file", file)
    const params = {
        method:POST,
        headers:{
            "Authorization" : getTokenApi()
        },
        body: formData
    };

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};
