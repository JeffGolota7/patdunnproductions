import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import styles from "./Companies.module.css";

const logos = ["brodie.png", "bu.png", "ec.png", "agganis.png", "harvard.svg"];

export function Companies() {
  return (
    <div className={styles.companiesContainer}>
      <h5 className={styles.companiesTitle}>
        - My work can be seen in these organizations -
      </h5>
      <div className={styles.companiesCarousel}>
        {logos.map((fileName, index) => (
          <img
            src={fileName}
            key={fileName}
            alt={fileName}
            className={styles.logo}
            style={{ animationDelay: `${index * 5.5}s` }}
          />
        ))}
      </div>
    </div>
  );
}
