const SERVER_PORT = process.env.PORT;
const express = require('express');
const ffmpeg = require('ffmpeg');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.listen(SERVER_PORT, () => {
    console.log(`server started on ${SERVER_PORT}`)
});