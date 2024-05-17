// server.js
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 5000; 

require('dotenv').config();


const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welkom op de backend!');
});

app.get('/api/data', (req, res) => { // Definieer een route /api/data
    res.send('Message from server.js backend');
});

app.listen(PORT, () => {
    console.log(`Server draait op poort ${PORT}`);
});
