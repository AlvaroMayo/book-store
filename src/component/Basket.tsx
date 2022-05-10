import { observer } from "mobx-react-lite";
import { useStore } from "../hooks";
import { BasketItem } from "./BasketItem";

export default observer(function Basket() {
  const { cart, cartTotal } = useStore();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height:"100vh"
      }}
    >
      <div>
        <h3 style={{ textAlign: "center", fontWeight:'300' }}>CART</h3>
      </div>
      <div style={{ overflowY: "scroll", overflowX: "hidden", height: "90vh" }}>
        {cart.map((item, i) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={i}>
            <BasketItem item={item} />
          </div>
        ))}
      </div>
      <div style={{display:"flex", flexDirection: "column", height:"8vh"}}>
        <span>Total</span>
        <span>£ {cartTotal}</span>
      </div>
    </div>
  );
});
