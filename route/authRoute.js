const express=require('express');
const router=express.Router();
const { login }=require('../controller/auth');

router.get('/',login);

module.exports=router;