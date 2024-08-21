import styles from "./HeroBanner.module.css";

export function HeroBanner() {
  return (
    <div className={styles.heroBannerContainer}>
      <h2 className={styles.heroTitle}>Elevating Sports Through My Lens</h2>
      {/* <img className={styles.heroImg} src="/about-hero.jpg" alt="Pat Dunn" /> */}
    </div>
  );
}
