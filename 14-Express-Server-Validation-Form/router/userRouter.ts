import express from 'express';
import {body, validationResult} from 'express-validator';

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
userRouter.post('/register', [
    body('name').not().isEmpty().withMessage('Name is Required'),
    body('email').isEmail().withMessage('Proper Email is Required'),
    body('password').isLength({min:5}).withMessage('Min 5 Required for for Password'),

], async (request:express.Request, response:express.Response) => {

    const error = validationResult(request);
    if(!error.isEmpty()){
        return response.status(400).json({errors: error.array()});
    }

    try {
        let {name, password, email} = request.body;
        response.status(400).json({
            user : {name, password, email}
        })
    } catch (e) {

    }


});

//Export
export default userRouter;