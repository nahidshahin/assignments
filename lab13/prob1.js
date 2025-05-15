import fs from "fs"
import express from 'express';

const app = express();

app.get('/image', (req, res) => { 
    fs.readFile('../lab3/1.s3.png', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
});

app.get('/pdf', (req, res) => { 
    fs.readFile('../lab3/lesson07-Class.pdf', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        res.end(data);
    });
});

app.get('/about', (req, res) => { 
    fs.readFile('../lab3/input.txt', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
});

app.get('/home', (req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my website');
});

app.all('/', (req, res) => { 
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

app.listen(8080, () => console.log('listening on 8080...'));