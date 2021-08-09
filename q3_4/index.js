const express = require("express");
const session = require("express-session");

const path = require("path");
const Product = require("./model/Product");
const Cart = require("./model/Cart");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "wapisfun" }));

app.get("/products/:productId", function (req, res) {
  res.render("product", {
    product: Product.getAllProducts()[req.params.productId],
  });
});
app.post("/product/addtocart", function (req, res) {
  req.session[req.body.productId] = (req.session[req.body.productId] || 0) + 1;
  res.redirect(303, "back");
});
app.get("/cart", function (req, res) {
  let cart = new Cart();
  for (let productId in req.session) {
    if (!isNaN(productId)) {
      cart.add(Product.getAllProducts()[parseInt(productId)], req.session[productId]);
    }
  }
  res.render("cart", { cart: cart });
});
app.listen(3000, () => console.log("Listing on port 3000..."));
