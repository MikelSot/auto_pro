import React from 'react';
import {API_HOST, DELETE, GET, POST, PUT} from "../utils/globals";
import {getTokenApi} from "./loginApi";

export const AllReviewClient = (id, max) => {
    const url = `${API_HOST}/v1/appointment/review/${id}/${max}`

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

export const ReviewGetById = (id) => {
    const url = `${API_HOST}/v1/appointment/review/${id}`

    const params = {
        method:GET,
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


export const ReviewCreate = (data) => {
    const url = `${API_HOST}/v1/appointment/review`

    const params = {
        method:POST,
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

export const UpdateReview = (id, data) => {
    const url = `${API_HOST}/v1/appointment/review/${id}`

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


export const DeleteReview = (id) => {
    const url = `${API_HOST}/v1/appointment/review/${id}`

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

export const GetAllReview = (max) => {
    const url = `${API_HOST}/v1/appointment/review-all/${max}`

    const params = {
        method:GET,
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