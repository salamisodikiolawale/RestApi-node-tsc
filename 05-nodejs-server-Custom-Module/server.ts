import http, {IncomingMessage, Server, ServerResponse} from "http";

//Custom module
import {StringUtil} from "./utils/StringUtil";


const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  200;
    response.setHeader('Content-Type', 'text/html');
    const txt:string = 'I am good';
    let length:number = StringUtil.printLength(txt);



    let channelName:string = 'UiBrains Technologies';
    let result:string = StringUtil.printTriangle(channelName);

    response.end(`<pre>${result}</pre>`);

    response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`)
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})