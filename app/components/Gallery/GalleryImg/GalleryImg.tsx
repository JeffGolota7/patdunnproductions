import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./GalleryImg.module.css";

export interface GalleryImgProps {
  image: string;
  alt: string;
}

export function GalleryImg({ image, alt }: GalleryImgProps) {
  const thumbnailSrc = image.replace(
    /(\/upload\/)/,
    `/upload/c_thumb,w_500,h_500/`
  );

  return (
    <motion.img
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      loading="lazy"
      src={thumbnailSrc}
      className={styles.imageStyleClass}
      alt={alt}
    />
  );
}
