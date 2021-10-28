const http = require("http");

// const server = http.createServer((req, res)=>{
//     console.log(req);
//     res.write("welcome to our Homapage");
//     res.end();
// })
// server.listen(5000);


const server = http.createServer((req, res)=>{
if (req.url === "/") {
    res.end("Welcome to our Home page");
}
if (req.url === "/about") {
    res.end("here is our short history");
}
res.end(`
<h1>Opps!</h1>
<p>We can't seem to find page you are looking for</p>
<a href ="/">Back Home </a>
`
);

});
server.listen(8080);