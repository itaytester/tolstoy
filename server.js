const SERVER_PORT = process.env.PORT || 8080;
const express = require("express");
const ffmpeg = require("ffmpeg");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello from api!');
})

app.listen(SERVER_PORT, () => {
  console.log(`server started on ${SERVER_PORT}`);
});
