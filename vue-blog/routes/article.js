let express=require('express')
let router=express.Router();

router.get('/add',(req,res)=>{
    res.send('发表文章')
})

module.exports=router