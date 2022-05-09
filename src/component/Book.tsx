import { Grid } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStore } from "../hooks";
import { IBook } from "../service/store";

export const Book = ({ id, price, title, rating, cover, author }: IBook) => {
  const { addToCart } = useStore();

  const handleAddBook = () => {
    addToCart(id, price);
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
      <img
        style={{ maxHeight: "240px", height: "100%" }}
        src={`/img${cover}`}
        alt=""
      />
      <h5>{title}</h5>
      <span>by {author}</span>
      <span>
        {stars.map((star, i) =>
          star === `StarIcon` ? (
            <StarIcon key={i} />
          ) : (
            <StarBorderIcon key={i} />
          )
        )}
      </span>
      <span>{price}</span>
      <Grid item>
        <button onClick={handleAddBook}>BUY</button>
      </Grid>
    </Grid>
  );
};
