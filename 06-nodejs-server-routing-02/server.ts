import http, {IncomingMessage, Server, ServerResponse} from "http";

//Route
import {ApiRouter} from "./router/ApiRouter";

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.setHeader('Content-Type', 'text/html');

    //node js router
    ApiRouter.mapRoutes(request, response);

});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})