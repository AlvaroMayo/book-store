import { observer } from "mobx-react-lite";
import { useStore } from "../hooks";
import { BookCover } from "./BookCover";

export default observer(function Basket() {
  const { cart, totalCart, removeFromCart  } = useStore();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

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
          <div style={{ display: "flex", flexDirection: "column" }} key={i} onClick={() => handleRemoveFromCart(item.id)}>
           <BookCover cover={item.cover} size="100px" />
           <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div style={{display:"flex", flexDirection: "column", height:"8vh"}}>
        <span>Total</span>
        <span>£ {totalCart}</span>
      </div>
    </div>
  );
});
