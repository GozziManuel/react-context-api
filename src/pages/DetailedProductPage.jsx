// IMPORTS
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailedProductPage() {
  // PARAMS
  const { id } = useParams();

  //   STATE
  const [detailedProduct, SetdetailedProduct] = useState([]);

  //   Navigate FUNCTION
  const navigate = useNavigate();

  // Buttons
  //   Prev BUTTON
  const [prevButton, SetPrevbutton] = useState(parseInt(id));
  const PrevnavigateButton = () => {
    SetPrevbutton(prevButton - 1);
    navigate(`/ProductPage/${prevButton - 1}`);
    navigate(0);
  };

  // NextButton
  const [NextButton, SetNextbutton] = useState(parseInt(id));
  const NextnavigateButton = () => {
    SetNextbutton(NextButton + 1);
    navigate(`/ProductPage/${NextButton + 1}`);
    navigate(0);
  };

  //   GettingAPI
  const GetIdProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);

        if (!res.data) {
          throw new Error("ProductNotFound");
        }

        SetdetailedProduct(res.data);
      })
      .catch((error) => {
        if (
          error?.response?.status === 404 ||
          error.message === "ProductNotFound"
        ) {
          navigate("/404");
          console.info("An unexpected error occurred:", error);
        }
      });
  };

  useEffect(GetIdProduct, []);
  if (!detailedProduct) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{detailedProduct.title}</h1>
      <img src={detailedProduct.image} alt={detailedProduct.title} />
      <p>{detailedProduct.description}</p>
      <button
        className="btn btn-primary"
        onClick={PrevnavigateButton}
        disabled={detailedProduct.id > 1 ? false : true}
      >
        Indietro
      </button>
      <button className="btn btn-primary" onClick={NextnavigateButton}>
        Avanti
      </button>
    </>
  );
}
