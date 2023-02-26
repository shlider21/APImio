const express = require('express');
const userRoute=require('../routes/users/routerUser/userRouters');

function routerApi(app){
    const router = express.Router();
    app.use('/api',router)

    router.use('/user', userRoute)
}




module.exports=routerApi;