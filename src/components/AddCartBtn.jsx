import { GiShoppingCart } from "react-icons/gi";
import "./AddCartBtn.css";

const AddCartBtn = ({ name, newPrice }) => {
  return (
    <button
      onClick={() => {
        alert(`Has comprado  ${name} en $${newPrice}`);
      }}
    >
      <GiShoppingCart />
    </button>
  );
};

export { AddCartBtn };
