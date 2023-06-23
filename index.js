const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    /*if (req.url === '/') {
        console.log('Inside homepage');
        *//*res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1> KUA - Kaneeshka & Kaari </h1>');
        res.end();*//*
        fs.readFile(path.join(__dirname, 'public', 'home.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(content);
            });
    }

    if (req.url === '/content') {
       
        fs.readFile(path.join(__dirname, 'public', 'content.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(content);
            });
    }

    if (req.url === '/api/users') {
        console.log(req.url);
        const users = [
            { name: 'Kaneeshka', age: 11 },
            { name: 'Kaari', age: 5 },
            { name: 'Priya', age: 40 },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }*/

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url);

    let extensionName = path.extname(filePath);

    //Content type
    let contentType = 'text/html';

    switch (extensionName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                res.writeHead(500);
                res.end(`Server error - ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }

    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started in port ${PORT}`));