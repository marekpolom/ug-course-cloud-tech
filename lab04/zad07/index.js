const express = require("express");
const app = express();

app.use(express.json());

const nwd = async (x, y) => {
    if(x < 0 || y < 0){
        return 0;
    }

    if(x === y){
        return x;
    }else if(x < y){
        return nwd(y-x, x);
    }else{
        return nwd(x-y, y);
    }
}

app.get("/nwd", async (req, res) => {
    const query = await clientPG.query(`SELECT * FROM nwd`);

  return res.send(query.rows);
});

app.post("/:num1/:num2", async (req, res) => {
    let x = parseInt(req.params.num1);
    let y = parseInt(req.params.num2);

    if(x < y){
        const z = x;
        x = y;
        y = z;
    }
  
    if(x > 0 || y > 0){
        const get = await clientRedis.get(`nwd:${x}:${y}`);

        if(get !== null){
            return res.send({
                nwd: get,
            });
        }else{
            const result = await nwd(x, y);
            await clientRedis.set(`nwd:${x}:${y}`, result);
            await clientPG.query(`INSERT INTO nwd(num1, num2, res) VALUES (${x}, ${y}, ${result})`);

            return res.send({
                nwd: result,
            });
        }
    }
  
    return res.send({
        nwd: result,
    });
});

const dbConnDataPG = {
  host: "172.18.0.2",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "tajne",
};

var clientRedis = '';

const { Client } = require("pg");
const clientPG = new Client(dbConnDataPG);
// console.log("Connection parameters: ");
// console.log(dbConnDataPG);
clientPG
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    const port = 5000;

    const Redis = require("ioredis");

    const dbConnDataRedis = {
    port: 6379,
    host: "172.18.0.3",
    };

    clientRedis = new Redis(dbConnDataRedis);

    clientRedis.on("error", (err) => {
    console.error("Error connecting to Redis", err);
    });

    clientRedis.on("connect", () => {
        console.log(`Connected to Redis.`);
        app.listen(port, () => {
            console.log(`API server listening at http://localhost:${port}`);
        });
    });
  })
  .catch((err) => console.error("Connection error", err.stack));