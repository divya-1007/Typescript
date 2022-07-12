import express from 'express';

export const login = (request:express.Request ,response:express.Response) =>{
response.status(200).send(`<h3>Welcome to Login Page</h3>`)

}