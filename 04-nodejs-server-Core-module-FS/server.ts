import http, {IncomingMessage, Server, ServerResponse} from "http";
import fs from 'fs';
import path from 'path';

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  200;
    response.setHeader('Content-Type', 'text/html');

    //FS Module
    /*fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8', (error, result) => {
        if(error){
            console.log(error);
        }

        fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, (error) => {
            if(error){
                console.log(error);
            }
            response.end(`<pre>Data is written to a file</pre>`);
        });

        //response.end(`<pre>${result}</pre>`);

    });*/

    //response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`)
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})