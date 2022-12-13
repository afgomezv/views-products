import "./Product.css";
import { AddCartBtn } from "./AddCartBtn";
import { Discount } from "./Discount";
import { Heart } from "./Heart";

const Product = ({ discount, image, name, oldPrice, newPrice }) => {
  return (
    <div className="product">
      <Heart />
      <Discount discount={discount} />
      <img className="product__img" src={image} alt="product" />
      <h2 className="product__name">{name}</h2>
      <div className="product__details">
        <p className="product__oldPrice">${oldPrice}</p>
        <p className="product__price">${newPrice}</p>
        <AddCartBtn name={name} newPrice={newPrice} />
      </div>
    </div>
  );
};

export { Product };
