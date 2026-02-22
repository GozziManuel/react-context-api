import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UseBudget } from "../context/budgetContext";

export default function ProductCard() {
  const { CheckValue } = UseBudget();

  const [products, setProducts] = useState([]);
  const apiGetProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(apiGetProducts, []);
  const newproducts = products;
  const filteredProducts = newproducts.filter((element) => element.price < 30);
  console.log(filteredProducts);

  if (CheckValue.public === true) {
    return (
      <>
        {filteredProducts.map((element) => (
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
  } else {
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
}
