import express from 'express';

const apiRouter:express.Router = express.Router();

//Logic
apiRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome API USER Router</h3>`);
});

apiRouter.get('/test', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome API USER Router TEST</h3>`);
});

//Export
export default apiRouter;