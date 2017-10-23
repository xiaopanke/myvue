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
  } else {
    res.end('404');
  }

}).listen(3000)




















