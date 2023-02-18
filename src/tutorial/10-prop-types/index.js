import React from "react";
import { useFetch } from "../9-custom-hooks/2-useFetch";
import Product from "./products";



const Index = () => {
  const url = "https://course-api.com/react-prop-types-example";
  const { products } = useFetch(url);
console.log(products)
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
