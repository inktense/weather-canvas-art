import dotenv from "dotenv";

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import weather from "./src/routes/weather.js";

// App Variables
const app = express();
const port = process.env.PORT || "8000";

//  App Configuration
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "src/public")));

// Routes Definitions
app.get("/", (req, res) => {
  //The first argument of res.render(view) is a string representing the file path of a template,
  // relative to the templates source directory, views
  res.render("index");
});
app.use("/weather", weather);

// Server Activation
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
