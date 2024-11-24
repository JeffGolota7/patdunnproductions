import { Link, useLoaderData } from "@remix-run/react";
import styles from "./Hero.module.css";
import { loader } from "~/routes/_index";
import { useMemo, useState } from "react";

export default function Hero() {
  const { photos } = useLoaderData<typeof loader>();
  const [backgroundImg, setBgImg] = useState("");

  useMemo(() => {
    if (photos) {
      const randomIndex = Math.floor(Math.random() * photos.resources.length);
      setBgImg(photos.resources[randomIndex].url);
    }
  }, [photos]);

  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.heroImg}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className={styles.overlay}></div>
      <h2 className={styles.heroTitle}>PAT DUNN PRODUCTIONS</h2>
      <Link to="/gallery" className={styles.heroButton}>
        <span>View my work</span>
      </Link>
    </div>
  );
}
