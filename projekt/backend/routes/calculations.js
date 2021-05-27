const express = require("express");
const router = express.Router({ mergeParams: true });
const { Error, Types } = require("mongoose");

const client = require("../config/redisClient");

const History = require("../models/History");

router.get("/hist", async (req, res) => {
  await History.find((err, result) => {
    return res.send({ result: result });
  });
});

router.post("/add", async (req, res) => {
  const num_1 = req.body.a;
  const num_2 = req.body.b;

  const redisRes = await client.get(`add:${num_1}:${num_2}`);

  if (redisRes) {
    return res.send({ result: { a: num_1, b: num_2, result: redisRes, type: 'ADD' } });
  } else {
    const result = parseFloat(num_1) + parseFloat(num_2);

    const data = {
      type: "ADD",
      num_1: num_1,
      num_2: num_2,
      result: result,
    };

    await client.set(`add:${num_1}:${num_2}`, result);

    await History.insertMany(data, (err, result) => {
      console.log("1 document inserted");
    });

    return res.send({ result: { a: num_1, b: num_2, result: result, type: 'ADD' } });
  }
});

router.post("/sub", async (req, res) => {
  const num_1 = req.body.a;
  const num_2 = req.body.b;

  const redisRes = await client.get(`sub:${num_1}:${num_2}`);

  if (redisRes) {
    return res.send({ result: { a: num_1, b: num_2, result: redisRes, type: 'SUB' } });
  } else {
    const result = parseFloat(num_1) - parseFloat(num_2);

    const data = {
      type: "SUB",
      num_1: num_1,
      num_2: num_2,
      result: result,
    };

    await client.set(`sub:${num_1}:${num_2}`, result);

    await History.insertMany(data, (err, result) => {
      console.log("1 document inserted");
    });

    return res.send({ result: { a: num_1, b: num_2, result: result, type: 'SUB' } });
  }
});

router.post("/mult", async (req, res) => {
  const num_1 = req.body.a;
  const num_2 = req.body.b;

  const redisRes = await client.get(`mult:${num_1}:${num_2}`);

  if (redisRes) {
    return res.send({ result: { a: num_1, b: num_2, result: redisRes, type: 'MULT' } });
  } else {
    const result = parseFloat(num_1) * parseFloat(num_2);

    const data = {
      type: "MULT",
      num_1: num_1,
      num_2: num_2,
      result: result,
    };

    await client.set(`mult:${num_1}:${num_2}`, result);

    await History.insertMany(data, (err, result) => {
      console.log("1 document inserted");
    });

    return res.send({ result: { a: num_1, b: num_2, result: result, type: 'MULT'  } });
  }
});

router.post("/div", async (req, res) => {
  const num_1 = req.body.a;
  const num_2 = req.body.b;

  const redisRes = await client.get(`div:${num_1}:${num_2}`);

  if (redisRes) {
    return res.send({ result: { a: num_1, b: num_2, result: redisRes, type: 'DIV'  } });
  } else {
    const result = parseFloat(num_1) / parseFloat(num_2);

    const data = {
      type: "DIV",
      num_1: num_1,
      num_2: num_2,
      result: result,
    };

    await client.set(`div:${num_1}:${num_2}`, result);

    await History.insertMany(data, (err, result) => {
      console.log("1 document inserted");
    });

    return res.send({ result: { a: num_1, b: num_2, result: result, type: 'DIV'  } });
  }
});

module.exports = router;
