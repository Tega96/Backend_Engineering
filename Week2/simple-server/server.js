const http = require("http");

const HOSTNAME = "localhost"
const PORT = 8000

const listener = function(req, res) {
    res.write(" We are writing anything here to the server")
    res.end("This is the end of the server responce")
}
const server = http.createServer(listener)

server.listen(PORT, HOSTNAME,() => {
    console.log()
})






// const hostname = 'localhost';
// const port = 8000;

// // Add Request Listener to the server
// const requestListener = function (request, response) {
//     response.writeHead(200); // Status code 200 = OK
//     response.write("Hello World");
//     response.end();
// };



// // Create the server
// const server = http.createServer(requestListener)
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })