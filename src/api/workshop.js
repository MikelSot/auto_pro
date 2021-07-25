import {API_HOST, GET} from "../utils/globals";

export const AllWorkshopAppointmentFormApi = () =>{
    const url = `${API_HOST}/v1/workshop-home/10`;
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
