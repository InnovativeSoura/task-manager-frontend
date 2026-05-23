// Node.js can create servers without any extra library.

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, response) => {

    let filePath = "./index.html";

    if (req.url === "/style.css") {
        filePath = "./style.css";
    }

    if (req.url === "/script.js") {
        filePath = "./script.js";
    }

    const extname = path.extname(filePath);

    let contentType = "text/html";

    switch (extname) {
        case ".css":
            contentType = "text/css";
            break;

        case ".js":
            contentType = "text/javascript";
            break;
    }

    fs.readFile(filePath, (error, data) => {

        if (error) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("<h1>404 File Not Found</h1>");
        } else {
            response.writeHead(200, { "Content-Type": contentType });
            response.end(data);
        }

    });

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});