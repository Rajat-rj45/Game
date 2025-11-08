const readline = require("readline");
const http= require('http')
const fs=require('fs')

http.createServer((req,res)=>{
  fs.readFile("game.html", "utf-8", (err,data)=>{
    if(err){
      res.write("internal error");
    }else{
      res.end(data)
    }
  })
}).listen(3000);

