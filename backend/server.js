const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const cardRoutes = require("./routes/card");
const userRoutes = require("./routes/user");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://freesmike.com",
      "http:/www.freesmike.com",
      "https://localhost:5173",
      "https://freesmike.com",
      "https:/www.freesmike.com",
    ],
    methods: ["GET", "POST"],
  }),
);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(express.json());

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use("/user", userRoutes);
app.use("/card", cardRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
