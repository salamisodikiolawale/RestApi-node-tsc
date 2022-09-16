import  express from 'express';
import apiRouter from "./router/apiRouter";
import userRouter from "./router/userRouter";

const  app = express();

const hostname:string = '127.0.0.1';
const port:number = 3000;

app.get('/', (request:express.Request, response: express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to express js</h3>`);
});

//Router configuration
app.use('/api', apiRouter);
app.use('/users', userRouter);

app.listen(port, hostname, () => {
    console.log(`Express Server is started  at http://${hostname}:${port}`);
});