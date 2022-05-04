import { types, Instance } from "mobx-state-tree";

const BookModel = types.model("Book", {
  id: types.number,
  title: types.string,
  price: types.number,
  author: types.string,
  rating: types.number,
  coverImage: types.string,
});

const StoreModel = types
  .model("Store", {
    id: types.number,
    books: types.array(BookModel),
    cart: types.array(BookModel),
  })
  .actions((self) => ({
    addToCart(newBook: Book) {
      self.cart.push(newBook);
    },
  }));

const RootModel = types.model("Root", {
  store: StoreModel,
});

export { RootModel };

export type Root = Instance<typeof RootModel>;
export type Store = Instance<typeof StoreModel>;
export type Book = Instance<typeof BookModel>;
