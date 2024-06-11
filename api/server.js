const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
});

app.post("/ticket_submit", (req, res) => {
  const sql =
    "INSERT INTO ticket_details (`name`,`description`,`assign`) VALUES (?,?,?)";
  const values = [req.body.name, req.body.description, req.body.assign];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Ticket sumbitted successfully" });
  });
});

app.get("/tickets_tracked", (req, res) => {
  const sql = "SELECT * FROM ticket_details";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
