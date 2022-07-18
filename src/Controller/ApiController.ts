import express from 'express';
import bcrypt from 'bcrypt'
import {VENDOR_API ,JWT_SECRETS} from '../Config/IndexConfig'
import jwt from 'jsonwebtoken';
import { login as Login,getSecureAgent } from '../Service/Login';
import { sendOk ,sendAuthorizedError } from '../Util/ResponseUtil';
import { default as _ } from 'lodash';
import { MESSAGE } from '../Messages/MessageData';

export const logup = async(request:express.Request ,response:express.Response) =>{
let {number ,password} = request.body;
let agent: null | undefined = await Login(number, password);
if (_.isEmpty(agent) && agent !== undefined ) {
    sendAuthorizedError(response, MESSAGE.LOGIN_FAILED);
  } else {

    let signId = agent!;
    if(agent!) {
      signId = agent!;
    }
    
    let token = jwt.sign({
      id: signId,
    },
    JWT_SECRETS.JWT_SECRET,
      {
        expiresIn: `${JWT_SECRETS.JWT_EXPIRED_TIME}m`
      });
      
    console.log(`User ${number} logged to system`);
    sendOk(response, { token, userData: getSecureAgent(agent) });
  }
}