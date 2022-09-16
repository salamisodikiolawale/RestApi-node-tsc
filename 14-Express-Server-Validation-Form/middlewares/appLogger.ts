import express from "express";

/*
    @usage: tracking anything
 */
let appLogger = (request:express.Request, response:express.Response, next:express.NextFunction) => {
    //url, method, time, date

    let url:string = request.url;
    let method:string = request.method;
    let time:string = new Date().toLocaleTimeString();
    let date:string = new Date().toLocaleDateString();

    let result:string = `[${url} ${method} - ${date} - ${time}]`;
    console.log(result);

    next(); //Mandatory && last line
};

export default appLogger;