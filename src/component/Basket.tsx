import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks";
import { BasketItem } from "./BasketItem";

export default observer(function Basket() {
  const { cart, cartTotal } = useStore();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cart.map((item, i) => (
        <Grid container flexDirection={"column"} alignItems={"center"} key={i}>
          <BasketItem {...item} />
          {item}
        </Grid>
      ))}
      <span>Total</span>
      {cartTotal}
    </>
  );
});
