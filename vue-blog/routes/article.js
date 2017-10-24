let express=require('express')
let router=express.Router();

router.get('/add',(req,res)=>{
    res.render('article/add',{title:'发表文章'})
})

module.exports=router