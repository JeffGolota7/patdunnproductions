import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import PdpLogo from "../Svgs/PdpLogo";

import styles from "./Navbar.module.less";
import PdpShortLogo from "../Svgs/PdpShortLogo";

export default function Navbar() {
  const [mobileOpen, toggleMobileOpen] = useState(false);

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logo}>
        <PdpLogo className={styles.pdpLogoDesktop} />
        <PdpShortLogo className={styles.pdpLogoMobile} />
      </Link>
      <ul
        className={`${styles.navbarLinks} ${
          mobileOpen ? styles.mobileMenu : ""
        }`}
      >
        <motion.li whileHover={{ scale: 1.05 }}>
          <Link
            className={styles.navbarLink}
            onClick={() => toggleMobileOpen(false)}
            to="/gallery"
          >
            My Work
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>
          <Link
            className={styles.navbarLink}
            onClick={() => toggleMobileOpen(false)}
            to="/about"
          >
            About Me
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>
          <a
            className={styles.navbarLink}
            onClick={() => toggleMobileOpen(false)}
            href="mailto:dunnp2019@gmail.com"
          >
            Contact Me
          </a>
        </motion.li>
        {mobileOpen && (
          <div onClick={() => toggleMobileOpen(false)} className={styles.close}>
            X
          </div>
        )}
      </ul>

      <div className={styles.hamburger} onClick={() => toggleMobileOpen(true)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </nav>
  );
}
