import http, {IncomingMessage, Server, ServerResponse} from "http";

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  200;
    response.setHeader('Content-Type', 'text/html');

    let url:string | undefined = request.url;
    let method:string | undefined = request.method;

    let result:string = `Page not found`;

    if(url === '/' && method === 'GET'){

        result = `<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`;

    } else if(url === '/about' && method === 'GET') {

        result = `<h3 style="font-family: Lato; sans-serif; color: blue">About page</h3>`;

    } else if(url === '/services' && method === 'GET') {

        result = `<h3 style="font-family: Lato; sans-serif; color: blue">Services Page</h3>`;

    } else if(url === '/contact' && method === 'GET') {

        result = `<h3 style="font-family: Lato; sans-serif; color: blue">Contact page</h3>`;

    } else {
        response.statusCode =  404;
        result = result;

    }
    response.end(result);
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})