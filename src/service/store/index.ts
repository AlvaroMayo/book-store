import { types, Instance } from "mobx-state-tree";

const BookModel = types.model("Book", {
  id: types.number,
  title: types.string,
  price: types.number,
  author: types.string,
  rating: types.number,
  cover: types.string,
})

const RootModel = types
  .model("Root", {
    id: types.number,
    books: types.array(BookModel),
    cart: types.array(types.number),
    cartTotal: types.optional(types.number, 0)
  })
  .actions((self) => ({
    addToCart(id: number, price: number) {
      self.cart.push(id);
      self.cartTotal = self.cartTotal + price
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
