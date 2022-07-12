import express  from "express";
import apiRouter from "./src/RouterApi/ApiRouter";
import UserRouter from "./src/RouterApi/UserRouter";
import appLogger from "./src/Middleweare/AppLoggre";


const app:express.Application = express();

app.get('/',(request:express.Request ,response:express.Response) => {
    response.status(200).send(`<h3>Welcome to Express Server JS</h3>`)
   })

/* configration express to receive from data */
app.use(express.json());
app.use(express.urlencoded({extended:false}))

/*Middleware  configration */
app.use(appLogger);

/* Router Configration*/
app.use('/api' ,apiRouter);
app.use('/user' ,UserRouter)


const hostName:string = '127.0.0.1';
const port:number = 9000;

app.listen(port,hostName , () =>{console.log(`Listening on port http://${hostName}:${port}`)})

// export default app ;