import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Path from "../../components/Path/Path";
import styles from "./Details.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import IncDec from "../Cart/IncDec";
import axios from "axios";
import {
  add_cartItem_url,
  domain,
  get_product_details_url,
} from "../../assest/Api/Api";
import Error from "../../components/Error/Error";
import Spinner from "../../components/Spinner/Spinner";
import { useGlobalContext } from "../../context";
import { BsCartFill } from "react-icons/bs";

const Details = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { auth, token } = useGlobalContext();
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(get_product_details_url + "/" + id, {});
      setDetails(response.data.product);

      setLoading(false);
    } catch (ex) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addItemToCart = async () => {
    try {
      setLoading(true);
      setError(false);
      const resp = await axios.post(add_cartItem_url, {
        product_id: id,
        token,
        amount: counter,
      });
      setLoading(false);
      navigate("/cart");
    } catch (error) {
      console.log(error.response.data);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <main>
      <Path path=" Products / Mobile" />
      <div className="container">
        <Link to="/products" className={`sub-button ${styles.back}`}>
          Back to products
        </Link>
        <div className={styles.details}>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Error />
          ) : (
            <>
              <div className={styles.images}>
                <Splide
                  options={{
                    drag: "free",
                    arrows: true,
                    type: "loop",
                    perPage: 1,
                    pagination: true,
                    gap: "1rem",
                  }}
                  aria-label="My Favorite Images"
                >
                  {details.images &&
                    details.images.map((item, index) => {
                      return (
                        <SplideSlide key={index}>
                          <div>
                            <img src={`${domain}${item}`} alt="Image 1" />
                          </div>
                        </SplideSlide>
                      );
                    })}
                </Splide>
              </div>
              <div className={styles.info}>
                <h2>{details.name}</h2>
                <span>$ {details.price}</span>
                <p className={styles.brief}>{details.description}</p>
                <div>
                  <span>Brand :</span>
                  <span>{details.brand}</span>
                </div>
                <div>
                  <span>Ram :</span>
                  <span>{details.ram}Gb</span>
                </div>
                <div>
                  <span>Processer :</span>
                  <span>{details.processor}</span>
                </div>
                {auth ? (
                  <>
                    <IncDec counter={counter} setCounter={setCounter} />
                    <button
                      onClick={() => {
                        addItemToCart();
                      }}
                      className="button"
                    >
                      Add To Cart
                    </button>
                  </>
                ) : (
                  <Link to={"/login"} className="sub-button">
                    Log In to fill your cart <BsCartFill />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Details;
