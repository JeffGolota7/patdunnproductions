import { useCachedLoaderData } from "remix-client-cache";
import { loader } from "~/routes/_index";

import styles from "./Videos.module.css";

export function Videos() {
  const { videos } = useCachedLoaderData<typeof loader>();

  return (
    <div className={styles.videoCarousel}>
      {videos &&
        videos.resources &&
        videos.resources.map((video) => (
          <video key={video.public_id} src={video.url} controls muted />
        ))}
    </div>
  );
}
