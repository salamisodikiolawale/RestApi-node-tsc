import express from 'express';

const userRouter:express.Router = express.Router();

//Config express to receive form data
userRouter.use(express.json()); //Content-Type: application/json
userRouter.use(express.urlencoded({extended:false})); //Content-Type: application/x-www-form-urlencoded

/*
    @usage : test url
    @url : http://127.0.0.1:3000/users/
    @method : get
    @fields : no-fields
    @access: PUBLIC
 */
userRouter.get('/', (request:express.Request, response:express.Response) => {
    response.status(200).send(`<h3 style="font-family: Lato; sans-serif; color: blue">Welcome API USER Router</h3>`);
});

/*
    @usage : to check the form data
    @url : http://127.0.0.1:3000/users/login
    @method : post
    @fields : name, password
    @access: PUBLIC
 */
userRouter.post('/login', (request:express.Request, response:express.Response) => {
    let formData:any = request.body;
    response.status(200).json({
        msg: 'form data is received',
        formData : formData
    })
});

//Export
export default userRouter;