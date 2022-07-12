import express from 'express';
import {login} from '../Controller/UserController'
const UserRouter:express.Router = express.Router()

UserRouter.get('/' ,login)



export default UserRouter ;