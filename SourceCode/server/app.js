const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("connected database");
  app.listen(process.env.PORT || 5000);
});
