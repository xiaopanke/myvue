let express =require('express');
let path =require('path');
let app=express()

//设置模板引擎 html
app.set('view engine','html')
//指定模板的存放根目录
app.set('views',path.resolve('views'))
//指定对于html类型的模板使用ejs方法来进行渲染
app.engine('html',require('ejs').__express)

app.use(express.static(path.resolve('node_modules')))

let index=require('./routes/index');
let user=require('./routes/user');
let article=require('./routes/article');
app.use('/',index);
//当客户端请求过来的路径是/user开关的话，会交由user中间件来处理/user/signup   /user/signin
/*
*  /首页
 *  /user/signup 注册
 *  /user/signin 登录
 *  /user/signout 退出
 *  /article/add 发表文章
*
* */
app.use('/user',user)
app.use('/article',article)

app.listen(8080)
/*
let server=require('http').createServer(app)
server.listen(8080)
* */