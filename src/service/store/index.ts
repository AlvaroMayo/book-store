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
    books: types.optional(types.array(BookModel),[]),
    cart: types.optional(types.array(BookModel),[]),
  })
  .actions((self) => ({
    createBook(books:IBook[]) {
      self.books.replace(books)
    },
    addToCart(book: IBook) {
      self.cart.push(book);
    },
    removeFromCart(id: number) {
      self.cart.replace(self.cart.filter(x => x.id !== id));
    },
  }))
  .views((self) => ({
    get totalCart() {
      return self.cart.reduce((acc, curr) => {return acc + curr.price}, 0)
    }
  }));

export { RootModel };

export type IRoot = Instance<typeof RootModel>;
export type IBook = Instance<typeof BookModel>;


//put and map identifier reference