const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const app = express();
const employeeRoute = require("./routes/employeeRoutes");
const bodyParser = require("body-parser");

dotEnv.config();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connected sucessfully");
  })
  .catch((error) => {
    console.log(`${error}`);
  });

app.use("/employees", employeeRoute);
const PORT = process.env.PORT || 4500;

console.log(process.env);
app.listen(PORT, () => {
  console.log(`server started sucessfully${PORT}`);
});
