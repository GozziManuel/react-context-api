import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UseBudget } from "../context/budgetContext";

export default function ProductCard() {
  const { CheckValue } = UseBudget();
  console.log(CheckValue.public);

  const [products, setProducts] = useState([]);
  const apiGetProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  };
  useEffect(apiGetProducts, []);
  const FilterExpensive = () => {
    if (CheckValue.public === true) {
      const filteredProducts = products.filter((element) => element.price < 30);
      setProducts(filteredProducts);
    }
  };
  useEffect(FilterExpensive, []);

  console.log(products);

  return (
    <>
      {products.map((element) => (
        <div className="col-6" key={element.id}>
          <div className="card h-100 justify-content-center">
            <Link to={"/ProductPage/" + element.id}>
              <img
                src={element.image}
                className="card-img-top cardimg"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
                <p className="fw-bold">{element.price}&euro;</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
