import { useStore } from "../hooks";

export const BasketItem = (item: number) => {
  const { booksInCart } = useStore();
  console.log(item)
  item = item - 1;
  return (
    <>
      <img src={`/img${booksInCart[item].cover}`} alt="" />
      <span>£{booksInCart[item].price}</span>
    </>
  );
};
