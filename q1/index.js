const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("form", { cookies: req.cookies });
});

app.post("/", (req, res) => {
  res.cookie(req.body.key, req.body.value);
  res.redirect("back");
});

app.listen(3000, () => console.log("Listining on port 3000......"));
