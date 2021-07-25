import {API_HOST, POST} from "../utils/globals";

export const SignInApi = (newClient) => {
    const url = `${API_HOST}/v1/register`
    const clientTemp = {
        ...newClient,
        email:newClient.email.toLowerCase()
    }
    delete clientTemp.repeat_password;
    const params = {
        method:POST,
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clientTemp)
    }

    return fetch(url, params).then(response => {
       return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
};

