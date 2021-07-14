import {API_HOST} from "../utils/globals";

export const AllProductHomeApi = () =>{
    const url = `${API_HOST}/v1/product-home/0`;
    const params = {
        method:"GET"
    }

    return fetch(url, params).then(response =>{
        return response.json()
    }).then(result =>{
        return result;
    }).catch(err =>{
        return err;
    });
}

