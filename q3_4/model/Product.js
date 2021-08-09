products = [];
class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = {
  1: new Product(1, "Shoe", 12, "The best ever!"),
  2: new Product(2, "Another Shoe", 11, "this is the best"),
  4: new Product(3, "Pillow", 5, "Good for neck!"),
  5: new Product(4, "T-shirt", 5.5, "V shape neck."),
  6: new Product(5, "Another Pillow", 15, "the best for neck!"),
  7: new Product(6, "Matress", 5, "Good for body!"),
  8: new Product(7, "Pillowcase", 5, "white."),
};
module.exports = Product;
