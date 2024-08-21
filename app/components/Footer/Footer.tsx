import { BsInstagram, BsLinkedin } from "react-icons/bs";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.left}>Pat Dunn Productions 2024</div>
      <div className={styles.right}>
        <ul className={styles.socials}>
          <li className={styles.socialLink}>
            <a
              href="https://www.instagram.com/pat_dunn_productions/"
              style={{ cursor: "pointer" }}
            >
              <BsInstagram />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a
              href="https://www.linkedin.com/in/patrickadunn/"
              style={{ cursor: "pointer" }}
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
