//const cheerio = require("cheerio");
const axios = require('axios');
var fs = require('fs');

//Id是0的时候url中取到20
const startId = 0;
const endId = 10;
var i = 0;

for(i = startId;i <= endId;i++){
        let httpUrl = 'https://bbs-api.mihoyo.com/post/wapi/getPostReplies?gids=2&is_hot=true&last_id=' + (i*20+20).toString() + '&post_id=1958320&size=20'
        axios.get(httpUrl).then((res)=>{
                var str = JSON.stringify(res.data);
                fs.writeFile('/home/nodeJs/' + i.toString() + '.json',res.data,{flag:"w",encoding:"utf-8"},function(err){
                        if(err){
                                console.log("chucuo")
                        }else{
                                console.log("success!")
                        }
                })
        })
}







/*
let httpUrl = "https://bbs-api.mihoyo.com/post/wapi/getPostReplies?gids=2&is_hot=true&last_id=20&post_id=1958320&size=20"
axios.get(httpUrl).then((res)=>{
        var str = JSON.stringify(res.data);
        fs.writeFile('res.data')
})
*/



/**
 * var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!www.linuxidc.com');
}).listen(8080);
console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');
 */
