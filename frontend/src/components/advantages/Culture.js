import React from "react";
import styles from "./Culture.module.css";
import { IoIosCompass } from "react-icons/io";

const Culture = () => {
  return (
    <section className={` section ${styles.cultrue}`}>
      <div className="container">
        <div className={styles.header}>
          <p>
            Mobile Shop <br />
            Built Only For You
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div>
              <IoIosCompass />
            </div>
            <span>Mission</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <IoIosCompass />
            </div>
            <span>Vision</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className={styles.box}>
            <div>
              <IoIosCompass />
            </div>
            <span>History</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
