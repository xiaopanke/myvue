//server 提供数据接口的
// 第一个接口获取轮播图数据 /api/sliders
//第二个接口获取最新上映数据 /api/hot
let http=require('http');
let url=require('url');
let fs =require('fs');
const path = require('path');

function read(pathfile,callback) {
  fs.readFile(path.join(__dirname, pathfile),'utf8',function (err,data) {
    (err || data=='') ? callback([]) : callback(JSON.parse(data));
  })
}
//写到book.json的方法
function write(pathfile,data,callback) {
  fs.writeFile(path.join(__dirname, pathfile),JSON.stringify(data),callback)
}
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  console.log(pathname);
  if(pathname === '/api/sliders'){
    read('./sliders.json',function (data) {
      res.end(JSON.stringify(data))
    })
  }else if(pathname === '/api/hot'){
    read('./book.json',function (data) {
      let books=data.reverse().slice(0,9)
      res.end(JSON.stringify(books))
    })
  }else if(pathname==='/api/book'){
    //请求方法 读取出的是大写
    let method=req.method;
    let id=parseInt(query.id)//转换成数字类型
    if(method==='GET'){
      if(id){//获取一个
        read('./book.json',(books)=>{
          //find找到后返回那一荐，找不到返回的是undefined
            let book=books.find((item)=>item.id==id)
            res.end(JSON.stringify(book)) //传给前端
        })
      }else{//获取全部
        read('./book.json',(books)=>{ //获取所有接口
          res.end(JSON.stringify(books))
        })
      }
    }else if(method==='POST'){
      //接收传递过来的数据，添加一个id 写入到book.json中
      let str=''
      req.on('data',(data)=>{
        str+=data
      })
      req.on('end',()=>{
        let book=JSON.parse(str);
        read('./book.json',(books)=>{//读取所以的图片，判断是否有书
          book.id=books.length===0 ? 1:books[books.length-1].id+1;
          books.push(book)
          write('./book.json',books,()=>{
            res.end(JSON.stringify(book))//添加成功后返回那一项
          })
        })
      })

    }else if(method==='PUT'){
      /*
      * 拿到id
      * 获取传递的数据
      * 读出数据去更改内容
      * 将最新的数据写回到json中
      * 响应结束返回修改的那一项
      * */
      let str=''
      req.on('data',(chunk)=>{
        str+=chunk;
      })
      req.on('end',()=>{
        let book=JSON.parse(str);
        read('./book.json',(books)=>{
          books=books.map(item=>{
            if(item.id==id){
              return book;
            }
            return item;
          })
          write('./book.json',books,()=>{
              res.end(JSON.stringify(book))
          })
        })
      })
    }else if(method==='DELETE'){
        read('./book.json',(books)=>{
          books=books.filter(item=>item.id!=id)
          write('./book.json',books,()=>{
            res.end(JSON.stringify({}))//添加成功后返回那一项
          })
        })
    }


  } else {
    res.end('404');
  }

}).listen(3000)




















