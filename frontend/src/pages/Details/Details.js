import React from "react";
import { Link } from "react-router-dom";
import Path from "../../components/Path/Path";
import styles from "./Details.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from "../../assest/images/mob1.jpg";
import image2 from "../../assest/images/mob2.jpg";
import image3 from "../../assest/images/mob3.jpg";
import "@splidejs/react-splide/css";
import IncDec from "../Cart/IncDec";
const Details = () => {
  return (
    <main>
      <Path path=" Products / Mobile" />
      <div className="container">
        <Link to="/products" className={`sub-button ${styles.back}`}>
          Back to products
        </Link>
        <div className={styles.details}>
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
              <SplideSlide>
                <div>
                  <img src={image1} alt="Image 1" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div>
                  <img src={image2} alt="Image 2" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div>
                  <img src={image3} alt="Image 3" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div className={styles.info}>
            <h2>Huawei P50 Pro</h2>
            <span>$125.99</span>
            <p className={styles.brief}>
              Cloud bread VHS hell of banjo bicycle rights jianbing umami
              mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
              dreamcatcher waistcoat, authentic chillwave trust fund. Viral
              typewriter fingerstache pinterest pork belly narwhal. Schlitz
              venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
              trust fund hashtag kinfolk microdosing gochujang live-edge
            </p>
            <div>
              <span>Brand :</span>
              <span>Iphone</span>
            </div>
            <div>
              <span>Ram :</span>
              <span>8Gb</span>
            </div>
            <div>
              <span>Processer :</span>
              <span>12300T</span>
            </div>
            <IncDec />
            <button className="button">Add To Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
