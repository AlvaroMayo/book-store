import { RootModel } from ".";

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    store: {
      id: 1,
      books: [],
      cart: [],
    },
  });
  return { rootTree };
};
