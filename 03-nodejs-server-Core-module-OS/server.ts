import http, {IncomingMessage, Server, ServerResponse} from "http";
import os from 'os';

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  200;
    response.setHeader('Content-Type', 'text/html');

    //OS Module
    let osData = {
            totalMemory: os.totalmem(),
            freeMemory: os.freemem(),
            homedir: os.homedir(),
            computerName: os.hostname(),
    };

    response.end(`<pre>${JSON.stringify(osData)}</pre>`);
    //response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`)
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})