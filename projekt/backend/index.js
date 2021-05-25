const express = require("express");
const app = express();
const cors = require('cors')
const calculations = require("./routes/calculations");
require("dotenv").config();

app.use(cors())
app.use(express.json());

app.use("/calculate", calculations);

const client = require("./config/redisClient");

const dbConnData = {
  host: process.env.MONGO_HOST || "127.0.0.1",
  port: process.env.MONGO_PORT || 27017,
  database: process.env.MONGO_DATABASE || "local",
};

const mongoose = require("mongoose");

client.on("error", (err) => {
  console.error("Error connecting to Redis", error);
});
client.on("connect", () => {
  console.log(`Connected to Redis.`);

  mongoose
    .connect(
      `mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then((response) => {
      console.log(
        `Connected to MongoDB. Database name: "${response.connections[0].name}"`
      );
      const port = process.env.PORT || 5000;
      app.listen(port, () => {
        console.log(`API server listening at http://localhost:${port}`);
      });
    })
    .catch((error) => console.error("Error connecting to MongoDB", error));
});
