const express = require('express');
const screenshot = require('screenshot-desktop');

const app = express();

const port = 3000;

app.use((req, res) => {
    const ipAddress = req.socket.remoteAddress;
    console.log(`Request: ${ipAddress}.`);
    // change filepath to match where you want the file save
    screenshot({ filename: '/Users/dbailey/Dev/screenshotserver/screenshot.png' });
    res.sendFile(
        // change filepath
        '/Users/dbailey/Dev/screenshotserver/screenshot.png'
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
