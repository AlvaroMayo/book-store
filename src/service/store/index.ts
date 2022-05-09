import { types, Instance } from "mobx-state-tree";

const BookModel = types.model("Book", {
  id: types.number,
  title: types.string,
  price: types.number,
  author: types.string,
  rating: types.number,
  cover: types.string,
});

const RootModel = types
  .model("Root", {
    books: types.array(BookModel),
    cart: types.array(types.number),
    cartTotal: types.optional(types.number, 0),
  })
  .actions((self) => ({
    addToCart(id: number, price: number) {
      self.cart.push(id);
      self.cartTotal = self.cartTotal + price;
    },
    removeFromCart(id: number, price: number) {
      self.cartTotal = self.cartTotal - price;

      for (let i = 0; i < self.cart.length; i++) {
        if (self.cart[i] === id) {
          self.cart.remove(self.cart[i]);
          break;
        }
      }
    },
  }))
  .views((self) => ({
    get booksInCart() {
      return self.books;
    },
  }));

export { RootModel };

export type IRoot = Instance<typeof RootModel>;
export type IBook = Instance<typeof BookModel>;
