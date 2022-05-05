import "./App.css";

import { Book } from "./component/Book";
import { Grid } from "@mui/material";
import { Basket } from "./component/Basket";
import { useStore } from "./hooks";

function App() {
  const { books } = useStore();
  return (
    <div className="App">
      <Grid container justifyContent={"space-between"} direction={"row"}>
        <Grid item xs={10}>
          <Grid container justifyContent={"center"} alignItems={"flex-start"}>
            {books.map((book) => (
              <Grid
                item
                xs={2}
                justifyContent={"flex-start"}
                alignItems={"center"}
                key={book.id}
              >
                <Book {...book} />
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
