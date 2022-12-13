import "./App.css";
import { Product } from "./components/Product";
import { ProductContainer } from "./components/ProductContainer";
import data from "./products.json";

function App() {
  return (
    <>
      <ProductContainer>
        {data.map((product) => (
          <Product
            key={product.id}
            discount={product.discount}
            image={product.url}
            name={product.name}
            oldPrice={product.price}
            newPrice={product.price - (product.price * product.discount) / 100}
          />
        ))}
      </ProductContainer>
    </>
  );
}

export default App;
