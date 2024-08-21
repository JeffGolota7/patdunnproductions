import { Link } from "@remix-run/react";
import styles from "./AboutDetails.module.css";
import EmailIcon from "~/components/Svgs/EmailIcon";
import { motion } from "framer-motion";

export function AboutDetails() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutDetails}>
        <div className={`${styles.firstSection} ${styles.section}`}>
          <h2 className={styles.aboutDetailsHeader}>
            Hey I'm <span style={{ color: "#3cc96b" }}>Pat Dunn</span>
          </h2>
          <p>
            I'm a dedicated sports photographer and videographer based in
            Greater Boston.
          </p>
          <br />
          <p>
            Whether it's on the field, court, or in the stadium, I thrive in the
            exhilarating atmosphere of sports events, always ready to freeze
            those split-second moments of victory or determination.
          </p>
        </div>
        <div className={`${styles.secondSection} ${styles.section}`}>
          <img className={styles.img} src="/about-info.jpg" alt="about1" />
          <div className={styles.details}>
            <h2>How I got here</h2>
            <p>
              My journey as a communication major at Endicott College has
              provided incredible opportunities to blend my love for sports with
              creative talents in photography and video production.
            </p>
            <br />
            <p>
              Through hands-on experiences and projects, I’ve been able to
              capture the energy and excitement of live sporting events while
              honing my skills behind the camera. This combination of academic
              learning and real-world application has fueled my growth as a
              videographer, enabling me to create dynamic and engaging visual
              content that tells compelling stories on and off the field.
            </p>
          </div>
        </div>
        <div className={`${styles.thirdSection} ${styles.section}`}>
          <div className={styles.details}>
            <h2>Check out my work!</h2>
            <p>
              Feel free to explore my collection of photos and videos, which
              highlight not only my technical skills but also my passion for
              storytelling and visual artistry.
            </p>
            <br />
            <p>
              I hope my work resonates with you as much as it does with me.
              Let's celebrate the power of sports together!
            </p>
            <br />
            <Link className={styles.galleryLink} to="/gallery">
              View my work
            </Link>
          </div>
          <img className={styles.img} src="/info-1.jpg" alt="about2" />
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactSection}>
          <img src="/info-3.jpg" alt="Contact me!!!" />
          <div className={styles.contactRight}>
            <h4>Let's get in touch</h4>
            <p>dunnp2019@gmail.com</p>
            <motion.a
              className={styles.emailButton}
              href="mailto:dunnp2019@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
            >
              <EmailIcon />
              <p>Email me</p>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
