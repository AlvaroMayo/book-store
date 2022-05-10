import React from "react";
import { useStore } from "../hooks";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

export interface BasketItemProps {
  item: number;
}

export const BasketItem = ({ item }: BasketItemProps) => {
  const { booksInCart, removeFromCart } = useStore();
  item = item - 1;
  const { cover, price, id } = booksInCart[item];

  const handleRemoveFromCart = () => {
    removeFromCart(id, price);
  };

  return (
    <>
      <div style={{position:"relative"}}>
        <CancelTwoToneIcon
          onClick={handleRemoveFromCart}
          style={{
            position: "absolute",
            left: "0",
            top:"-2px",
            fill: "black",
            cursor: "pointer",
          }}
        />
        <img src={`/img${cover}`} alt="" width={"105px"} />
      </div>
      <span style={{textAlign:"center"}}>£{price}</span>
    </>
  );
};
