import "./App.css";

import { Grid } from "@mui/material";
import Basket from "./component/Basket";
import { BookList } from "./component/BookList";
import { Hero } from "./component/Hero";

function App() {

  return (
    <div className="App">
      <Grid container justifyContent={"space-between"} direction={"row"} maxHeight={"100vh"} height={"100vh"}>
        <Grid item xs={11}>
          <Hero />
         <BookList />
        </Grid>
        <Grid item xs={1}>
          <Basket />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
