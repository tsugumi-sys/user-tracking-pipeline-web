const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}\n`);
  // Check if the request is for the JavaScript file
  if (req.url === "/script.js") {
    // Read the JavaScript file from the file system
    fs.readFile(path.join(__dirname, "script.js"), "utf-8", (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
        return;
      }
      // Serve the JavaScript file
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(content);
    });
  } else {
    // Serve a simple HTML file or 404 not found
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      '<!DOCTYPE html><html><head><title>Test Page</title></head><body><h1>Access <a href="/script.js">/script.js</a></h1><script src="script.js"></script></body></html>',
    );
  }
}).listen(3000, () => {
  console.log("Server is running on http://localhost:3000!!");
});
