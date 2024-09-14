const express = require("express");
const cors = require("cors");
require("dotenv").config();
const newsRoutes = require("./routes/newsRoutes");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_BASE_URL, // Allow only the frontend origin
  methods: ["GET", "POST"], // Allow only GET and POST requests
};
app.use(cors(corsOptions));

app.use(express.json());

// Define routes
app.use("/api", newsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the News App Backend!");
});

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT} PORT`)
);
