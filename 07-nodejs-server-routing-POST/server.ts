import http, {IncomingMessage, Server, ServerResponse} from "http";

const hostname:string = '127.0.0.1';
const port:number = 3000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse) => {

    response.statusCode =  200;
    response.setHeader('Content-Type', 'Application/json');

    //URL & POST
    if(request.url === '/user' && request.method === 'POST') {
        try {
            let body:any = '';
            request.on('data', (chunk) => {
                body += chunk;
            }).on('end', () => {
                let formData = JSON.parse(body);
                response.end(`<pre>${JSON.stringify(formData)}</pre>`);
            });

        } catch (e) {
            console.log(e);
        }

    }



    //response.end(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome to nodejs server</h3>`)
});

server.listen(port, hostname, () => {
    console.log(`Node js server is started at http://${hostname}:${port}`);
})