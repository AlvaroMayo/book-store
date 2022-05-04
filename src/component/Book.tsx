import { Grid } from "@mui/material";
import { getSnapshot } from "mobx-state-tree";
import { setupRootStore } from "../service/store/setup";
import  StarBorderIcon from '@mui/icons-material/StarBorder';
import  StarIcon from '@mui/icons-material/Star';

type book = {
  author: string;
  cover: string;
  name: string;
  id: number;
  price: number;
  rating: number;
};

export const Book = ({ name, author, cover, id, price, rating }: book) => {
  const addToCart = (book: any) => {
    rootTree.store.addToCart(book);
    console.log(getSnapshot(rootTree));
  };

  const { rootTree } = setupRootStore();
  let stars = [];
  for(let i=0; i<5; i++) {
    if(i<rating) {
        stars.push("StarIcon")
    } else {
        stars.push("StarIconBorder")
    }
  }

  return (
    <Grid container direction={"column"}>
      <img style={{maxHeight:"240px", height:"100%"}} src={`/img${cover}`} alt="" />
      <h5>{name}</h5>
      <span>by {author}</span>
      <span>
        {stars.map((star, i) => star === `StarIcon` ? <StarIcon key={i}/> : <StarBorderIcon key={i}/>)}
      </span>
      <span>{price}</span>
      <Grid item>
        <button
          onClick={() => {
            const book = {
              id: id,
              title: name,
              price: price,
              author: author,
              rating: rating,
              coverImage: cover,
            };
            addToCart(book);
          }}
        >
          BUY
        </button>
      </Grid>
    </Grid>
  );
};
