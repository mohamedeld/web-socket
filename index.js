const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use("/", (request, response, next) => {
  response.status(200).json({
    message: "hello world",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
