import { InstagramEmbed } from "react-social-media-embed";

import styles from "./Showcase.module.css";
import { igPosts } from "~/constants/common";

export function Showcase() {
  return (
    <div className={styles.showcaseContainer}>
      <h1 className={styles.showcaseHeader}>My work in action</h1>
      <div className={styles.posts}>
        {igPosts.map((post) => (
          <div className={styles.post} key={post}>
            <InstagramEmbed url={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
