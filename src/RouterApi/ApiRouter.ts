import express from 'express';
import {logup} from '../Controller/ApiController'
import appLogger from '../Middleweare/AppLoggre';
import {resgitrationVali,validate} from '../Validation/ExpressValidation'

const apiRouter:express.Router = express.Router()

apiRouter.post('/logup' ,resgitrationVali(), validate,appLogger ,logup)


export default apiRouter ;