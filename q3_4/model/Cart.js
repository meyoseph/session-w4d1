class Cart {
  constructor() {
    this._items = [];
  }
  add(product, quantity) {
    this._items.push({
      getName: () => product.getName(),
      getPrice: () => product.getPrice(),
      getQuantity: () => quantity,
    });
  }
  getAll() {
    return this._items;
  }
}
module.exports = Cart;
