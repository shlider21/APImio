const express = require('express');
const router = express.Router();
const UserService = require('/Users/Angel Chaclan/Desktop/apimio/APImio/userService/userService')
const service = new UserService();

router.get('/',async(req,res)=>{
    const users = await service.find();
    res.json({users})
})


module.exports=router;