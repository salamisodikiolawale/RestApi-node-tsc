import express from 'express';
import bcryptjs from 'bcryptjs';


const userRouter:express.Router = express.Router();

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
userRouter.post('/register', async (request:express.Request, response:express.Response) => {

    let {name, password, email} = request.body;

    try {
        let salt = await bcryptjs.genSalt(10);
        let hashedPassword = await bcryptjs.hash(password, salt);

        response.status(200).json({
            user: {name, password, email},
            hashedPassword : hashedPassword
        });
    } catch (e) {
        console.error(e);
    }

});

//Export
export default userRouter;