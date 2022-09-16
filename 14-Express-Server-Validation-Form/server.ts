//Natifs Modules
import  express from 'express';

//Customs Modules

//Router
import userRouter from "./router/userRouter";

//Middlewares
import appLogger from "./middlewares/appLogger";




const  app:express.Application = express();
const hostname:string = '127.0.0.1';
const port:number = 3000;


//Config middleware to all requests
app.use(appLogger);

//Config express to receive form data
app.use(express.json());


app.get('/', (request:express.Request, response: express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to express js</h3>`);
});

//Router configuration
app.use('/users', userRouter);


app.listen(port, hostname, () => {
    console.log(`Express Server is started  at http://${hostname}:${port}`);
});