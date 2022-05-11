import "./App.css";

import { Grid } from "@mui/material";
import Basket from "./component/Basket";
import  BookList from "./component/BookList";
import { Hero } from "./component/Hero";
import { useEffect } from "react";
import { useStore } from "./hooks";

function App() {
  const { createBook } = useStore();

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/AlvaroMayo/book-store/master/src/assets/data/books.json")
    .then(data => data.json())
    .then(response => createBook(response))
  },[])
  
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
