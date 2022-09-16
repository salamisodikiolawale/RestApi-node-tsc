import  express from 'express';

const  app = express();

const hostname:string = '127.0.0.1';
const port:number = 3000;

app.get('/', (request:express.Request, response: express.Response) => {

    response.statusCode = 200;
    response.send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to express js</h3>`);
});

app.listen(port, hostname, () => {
    console.log(`Express Server is started  at http://${hostname}:${port}`);
});