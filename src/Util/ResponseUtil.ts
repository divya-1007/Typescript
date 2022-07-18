import express from 'express';
import { default as HttpStatus } from 'http-status';


let createOKResponse = (response:express.Response, code:number, data:object,) => {
    if (!response || !response.status) {
        throw new Error('Please correct response param');
    }

    let responseTemplate = {
        data: data || {},
    };

    return response.status(code).json(responseTemplate);
}

let createErrResponse = (response:express.Response, code:number, message:string, ) => {
    if (!response || !response.status) {
        throw new Error('Please correct response param');
    }

    let responseTemplate = {
        error: true,
        message,
    };

    return response.status(code).json(responseTemplate);
}



export let sendOk = (response:express.Response ,data:any) => {
    createOKResponse(response, HttpStatus.OK, data);
}

export let sendAuthorizedError = (response:express.Response, data:any) => {
    createErrResponse(response, HttpStatus.UNAUTHORIZED, data);
}