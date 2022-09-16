import http, {IncomingMessage, Server, ServerResponse} from "http";

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  201;
    response.setHeader('Content-Type', 'text/html');

    //URL & POST
    if(request.url === '/user' && request.method === 'POST') {
        let body:any = '';
        request.on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            let formData = JSON.parse(body);
            if(formData.name === 'Salami' && formData.password === 123){
                response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Login is success</h3>`);
            } else {
                response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Invalid Credentials</h3>`);
            }
        });
    }



    //response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`)
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})