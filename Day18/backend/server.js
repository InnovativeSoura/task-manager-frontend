const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require ("dns");

dns.setServers([
  "1.1.1.1","8.8.8.8"
])

dotenv.config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json({
   origin: "*"
}));

app.get("/", (req, res) => {
  res.send("Auth API Running 🚀");
});

app.use("/api/auth", authRoutes);

/* MongoDB Connection */

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});