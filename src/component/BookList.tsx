import { Book } from "../component/Book";
import { Grid } from "@mui/material";
import { useStore } from "../hooks";
import { observer } from "mobx-react-lite";

export default observer(function BookList() {
  const { books } = useStore();
  return (
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
  );
}
)