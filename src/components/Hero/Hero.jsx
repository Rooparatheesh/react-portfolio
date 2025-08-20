import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Roopa Ratheesh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 11 months of experience in React and Node.js, along with hands-on expertise in Flutter. Feel free to reach out to learn more! 🚀
        </p>
        <a href="mailto:rooparatheesh2000@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Roopa Ratheesh"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
