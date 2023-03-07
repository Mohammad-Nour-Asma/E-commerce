import React from "react";
import Path from "../../components/Path/Path";
import about from "../../assest/images/about.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <main className="">
      <Path path="About" />
      <div className={`container ${styles.about}`}>
        <div className={styles.image}>
          <img src={about} alt="about us" />
        </div>
        <div className={` container ${styles.info}`}>
          <h1 className={styles.heading}>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
