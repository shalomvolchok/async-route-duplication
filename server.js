const http = require("http");
const fs = require("fs");

const template = fs.readFileSync("build/index.html", "utf8");

const requestHandler = (request, response) => {
    if (request.url != "/") {
        // definitely not a production technique here :)
        // delay so it's easier to observe when client side mounting occurs
        setTimeout(() => {
            response.headers = { "Content-Type": "application/json" };
            response.end(fs.readFileSync("./build" + request.url, "utf8"));
        }, 1000);
    } else {
        response.end(template);
    }
};

const port = 3000;
http.createServer(requestHandler).listen(port, err => {
    console.log(`server is listening on ${port}`);
});
