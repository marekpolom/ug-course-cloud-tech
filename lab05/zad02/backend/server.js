'use strict';

const express = require('express');

const app = express();

const Redis = require("ioredis");

const PORT = process.env.PGPORT;

const dbConnDataRedis = {
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_URL,
};

app.get('/', (req, res) => {
  res.send('Hello World');
});

const clientRedis = new Redis(dbConnDataRedis);

clientRedis.on("error", (err) => {
console.error("Error connecting to Redis", err);
});

clientRedis.on("connect", () => {
    console.log(`Connected to Redis.`);
    app.listen(PORT, () => {
        console.log(`API server listening at http://localhost:${PORT}`);
    });
});