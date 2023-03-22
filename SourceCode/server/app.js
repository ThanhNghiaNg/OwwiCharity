const express = require("express");

const authROutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(process.env.PORT || 5000);
