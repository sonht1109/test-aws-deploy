const express = require("express");
const Pool = require("pg").Pool;
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "lab-7.cxagqllyrvfc.ap-southeast-1.rds.amazonaws.com",
  password: "password",
  port: 5432,
  ssl: true,
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
  pool.connect().then((res) => {
    console.log("Successfully connect to DB");
  });
});
