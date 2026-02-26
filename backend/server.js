require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db");

const blogRoutes = require("./routes/blogRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/ai-suggestions", aiRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));