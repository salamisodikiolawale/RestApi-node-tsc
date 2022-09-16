import http from "http";

export class ApiRouter {

    public static mapRoutes(request:http.IncomingMessage, response:http.ServerResponse){

        response.statusCode =  200;
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
    }
}