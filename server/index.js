const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// for testing the app on localhost
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
