const express = require("express");
const route = express.Router();
const db = require("../connection");

route.post("/", (req, res) => {
  console.log(req.body);
  const { twelve, twentyfive, thirtyfive, fortyfive, date, brand } = req.body;
  if (!twelve || !twentyfive || !thirtyfive || !fortyfive || !date || !brand) {
    return res.status(400).json(" Please Provide All Data");
  } else {
    const sql =
      "INSERT INTO product (12kg, 25kg, 35kg, 45kg, date, brand) VALUES  (?, ?, ?, ?, ?, ?)";
    db.query(
      sql,
      [twelve, twentyfive, thirtyfive, fortyfive, date, brand],
      (err, result) => {
        if (err) {
          console.error("Error executing query:", err);
          return res
            .status(500)
            .send(` ${err} Error inserting data into the database`);
        } else {
          return res.status(200).json("Data Insert Success");
        }
      }
    );
  }
});


route.put("/:id", (req, res) => {
    const id = req.params.id
})

route.get("/", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error retrieving data from the database");
      return;
    }
    res.status(200).json(result);
  });
});

module.exports = route;
