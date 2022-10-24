const express = require('express');
const screenshot = require('screenshot-desktop');

const app = express();

const port = 3000;
const imgPath = '/Users/dbailey/Dev/screenshotserver';

app.use((req, res) => {
    const ipAddress = req.socket.remoteAddress;
    console.log(`Request: ${ipAddress}.`);
    screenshot({ filename: '/Users/dbailey/Dev/screenshotserver/screenshot.png' });
    res.sendFile(
        '/Users/dbailey/Dev/screenshotserver/screenshot.png'
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});