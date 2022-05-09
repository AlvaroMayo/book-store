import { useStore } from "../hooks";

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
      <img src={`/img${cover}`} alt="" />
      <span>£{price}</span>
      <button onClick={handleRemoveFromCart}>delete</button>
    </>
  );
};
