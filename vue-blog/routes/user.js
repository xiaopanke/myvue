let express=require('express')
let router=express.Router();
//用户注册  /user/signup  一半在server 一半在user里
router.get('/signup',(req,res)=>{
    res.render('user/signup',{title:'注册'})
})
router.get('/signin',(req,res)=>{
    res.render('user/signin',{title:'登陆'})
})
router.get('/signout',(req,res)=>{
    res.send('退出')
})

module.exports=router