const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // 🔥 MUST be at the top

const app = express();

console.log(process.env.MONGO_URI); // debug (should NOT be undefined)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
