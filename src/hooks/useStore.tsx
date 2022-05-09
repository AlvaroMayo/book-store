import { createContext, useContext } from "react";
import { RootModel } from "../service/store";

const store = RootModel.create({
    cart: [],
    books: [
        {
            "id": 1,
            "title": "Fatherhood",
            "author": "Christopher Wilson",
            "price": 10,
            "rating": 4,
            "cover": "/zoo.png"
        },
        {
            "id": 2,
            "title": "In A Land Of Paper Gods",
            "author": "Rebecca Mackenzie",
            "price": 15,
            "rating": 5,
            "cover": "/gods.png"
        },
        {
            "id": 3,
            "title": "Tattletale",
            "author": "Sarah J. Noughton",
            "price": 10,
            "rating": 4,
            "cover": "/tattle.png"
        },
        {
            "id": 4,
            "title": "The Firm",
            "author": "Sarah J. Noughton",
            "price": 10,
            "rating": 4,
            "cover": "/2.png"
        },
        {
            "id": 5,
            "title": "Big Bang Disruption",
            "author": "Larry Downes",
            "price": 10,
            "rating": 3,
            "cover": "/3.png"
        }
      ]
      
});
const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);