// server.js
const express = require('express');
const fs = require('fs');
const bodyparser = require("body-parser");
const app = express();
url = require('url');

// Middleware to parse JSON bodies
app.use(express.json());

app.use(bodyparser.json());
// POST endpoint to save data
app.post('/save-data', (req, res) => {
    console.log(req.body);
    const data = req.body;
    console.log(data);

    fs.appendFile('data.json', JSON.stringify(req.body) + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.send(req.body);
    });
});
app.get('/save-data' , (req , res) => {
    res.send("hi there");
    console.log("get request");
})

// Start the server
app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
});