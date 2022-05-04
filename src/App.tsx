import "./App.css";
import books from "./assets/data/books.json";
import { Book } from "./component/Book";
import { Grid } from "@mui/material";
import { Basket } from "./component/Basket";

function App() {
  return (
    <div className="App">
      <Grid container justifyContent={"space-between"} direction={"row"}>
        <Grid item xs={10}>
          <Grid container justifyContent={"center"} alignItems={"flex-start"}>
            {books.map((book) => (
              <Grid item xs={2} justifyContent={"flex-start"} alignItems={"center"} key={book.id}>
                <Book
                  id={book.id}
                  price={book.price}
                  author={book.author}
                  cover={book.cover}
                  name={book.name}
                  rating={book.rating}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Basket />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
