const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");

const connectDB = require("./config/resumedb");
// const resumeTemplate23Routes = require("./routes/template23Routes"); ❌ Commented out (file not found)
//const enhanceRoutes = require("./routes/enhanceRoutes");
//const uploadRoutes = require("./routes/uploadRoutes");
//const editRouter = require("./routes/editableResume");

const app = express();
const port = process.env.PORT || 5000;

// ✅ Connect MongoDB
connectDB();

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "../client/build")));

// ✅ Routes
// app.use("/api/template23", resumeTemplate23Routes); ❌ Temporarily disabled
//app.use("/api/enhance", enhanceRoutes);
//app.use("/api", uploadRoutes);
//app.use("/api/editresume", editRouter);

// ✅ Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
