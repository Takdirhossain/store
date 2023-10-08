const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const db = require("./connection");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const product = require("./routes/products")
app.use("/product", product)

  

app.listen(port, () => {
  console.log("server is running on port 5000");
});
