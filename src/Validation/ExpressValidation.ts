import { body, validationResult } from 'express-validator';
import express from 'express';

export const resgitrationVali = () => {
    return [
      body('number', 'Number Cannot Be Empty').not().isEmpty(),
      body('password', 'Password Cannot Be Empty').not().isEmpty(),
    ]
}

export const validate = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    

    // for(let index in errNEW){
    //     let keyname = errNEW[index].param
    //     let msgNew = errNEW[index].msg
    //     custArr[keyname]  = msgNew
    // }

    return res.status(200).json({
        status: 3,
        errors: errors,
    })
}