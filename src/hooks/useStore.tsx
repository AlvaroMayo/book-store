import { createContext, useContext } from "react";
import { RootModel } from "../service/store";

const store = RootModel.create({
    cart: [],
    books: []
});
const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);