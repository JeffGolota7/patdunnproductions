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
          <video key={video.public_id} controls muted>
            <source src={`${video.url}#t=0.001`} type="video/mp4" />
          </video>
        ))}
    </div>
  );
}
