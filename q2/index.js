const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();

app.use("/result", express.urlencoded({ extended: false }));
app.use(session({ secret: "wapisfun" }));
app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  let response =
    "<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<title>My App</title>" +
    `<link href="${
      hour >= 6 && hour <= 18 ? "/css/day.css" : "/css/night.css"
    }" rel="stylesheet">` +
    "</head>" +
    "<body>" +
    "<form action='/result' method='POST'>" +
    "<label>Name <input type='text' name='name'></label>" +
    "<label>Age <input type='text' name='age'></label>" +
    "<input type='submit' value='submit query'></label>" +
    "</form>" +
    "</body>" +
    "</html>";
  res.send(response);
});
app.post("/result", (req, res) => {
  session.username = req.body.name;
  session.age = req.body.age;
  res.redirect("/output");
});
app.get("/output", (req, res) => {
  let name = session.username;
  let age = session.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "unknown";
  }
  res.send(`Welcome ${name} with age ${age}`);
});
app.use("/css", express.static(path.join(__dirname, "css")));
app.listen(3000, () => console.log('Listining on port ...'));
