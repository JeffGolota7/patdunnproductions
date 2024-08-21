import { Link } from "@remix-run/react";

import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.infoDiv}>
        <p>
          Welcome to my portfolio! I&apos;m a passionate and dedicated sports
          photographer and videographer based in Greater Boston.
        </p>
        <Link to="/about">
          <button className={styles.aboutButton}>Learn more</button>
        </Link>
      </div>
      <img
        className={styles.aboutImg}
        src={"/pat-smiling.png"}
        alt="Hey there!"
      />
      <p className={styles.infoDiv}>
        This portfolio showcases my work, capturing the energy, emotion, and
        captivating moments that define the sports world. From intense action
        shots to behind-the-scenes glimpses, I aim to bring the spirit of sports
        to life through my lens.
      </p>
    </div>
  );
}
