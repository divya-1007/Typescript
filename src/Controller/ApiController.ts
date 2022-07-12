import express from 'express';
import bcrypt from 'bcrypt'

export const logup = async(request:express.Request ,response:express.Response) =>{
let {name ,email ,password} = request.body;
try {
    let salt  = await bcrypt.genSalt(10)
    let handelPassword = await bcrypt.hash(password ,salt)
   response.status(200).json({user:{name ,email ,password} ,handelPassword:handelPassword})

} catch (error) {
    console.log(error);
    
}
}