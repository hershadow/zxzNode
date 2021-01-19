//const cheerio = require("cheerio");
const axios = require('axios')

let httpUrl = "https://bbs-api.mihoyo.com/post/wapi/getPostReplies?gids=2&is_hot=true&last_id=20&post_id=1958320&size=20"
axios.get(httpUrl).then((res)=>{
        console.log(res)
})















/**
 * var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!www.linuxidc.com');
}).listen(8080);
console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');
 */
