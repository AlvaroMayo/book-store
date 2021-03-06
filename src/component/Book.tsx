import { Grid } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStore } from "../hooks";
import { IBook } from "../service/store";
import { BookCover } from "./BookCover";

export const Book = (book: IBook) => {
  const { title, rating, cover, author } = book;
  const { addToCart } = useStore();

  const handleAddBook = () => {
    addToCart(book);
  };

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push("StarIcon");
    } else {
      stars.push("StarIconBorder");
    }
  }

  return (
    <Grid container direction={"column"}>
      <BookCover cover={cover} />
      <h5 style={{ fontWeight: "300", fontSize: "18px", marginBottom: '5px' }}>{title}</h5>
      <span style={{fontSize: '12px'}}>by {author}</span>
      <span style={{ margin: "15px 0" }}>
        {stars.map((star, i) =>
          star === `StarIcon` ? (
            <StarIcon key={i} style={{ height: "15px", fill: "#5ABDB5" }} />
          ) : (
            <StarBorderIcon
              key={i}
              style={{ height: "15px", fill: "#5ABDB5" }}
            />
          )
        )}
      </span>
      <Grid item>
        <button
          onClick={handleAddBook}
          style={{
            color: "#5ABDB5",
            borderColor: "#5ABDB5",
            border: "1px solid",
            backgroundColor: "transparent",
            width: "60px",
            borderRadius: "20px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          BUY
        </button>
      </Grid>
    </Grid>
  );
};
