import { useCachedLoaderData } from "remix-client-cache";
import { loader } from "~/routes/gallery";

import styles from "./Gallery.module.css";
import { GalleryImg } from "./GalleryImg/GalleryImg";
import { useEffect, useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import React from "react";

export function Gallery() {
  const { photos, videos, categories } = useCachedLoaderData<typeof loader>();
  const [activePhotos, setActivePhotos] = useState(photos || []);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [currentMediaIndex, toggleCurrentMediaIndex] = useState(0);
  const [filters, updateFilters] = useState([]);

  const currentMedia = ["Photo", "Video"];

  useEffect(() => {
    if (filters.length > 0 && photos) {
      const newPhotos = photos.resources.filter((photo) => {
        const assetPath = photo.asset_folder.split("/");
        const category =
          assetPath !== "" &&
          assetPath[assetPath.length - 1].charAt(0).toUpperCase() +
            assetPath[assetPath.length - 1].slice(1);

        return filters.includes(category);
      });

      const pinned = newPhotos.filter(
        (photo) => photo.tags && photo.tags.length > 0
      );
      const unpinned = newPhotos.filter(
        (photo) => !photo.tags || photo.tags.length === 0
      );

      setActivePhotos([...pinned, ...unpinned]);
    } else {
      const newPhotos = [...photos.resources];

      const pinned = newPhotos.filter(
        (photo) => photo.tags && photo.tags.length > 0
      );
      const unpinned = newPhotos.filter(
        (photo) => !photo.tags || photo.tags.length === 0
      );

      setActivePhotos([...pinned, ...unpinned]);
    }
  }, [filters]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.filters}>
        <div className={styles.mediaToggle}>
          <motion.div
            className={styles.toggleLabel}
            animate={{ left: currentMediaIndex === 0 ? 0 : 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() =>
              toggleCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
            }
          >
            {currentMedia[currentMediaIndex]}
          </motion.div>
        </div>
        {currentMediaIndex === 0 && (
          <>
            <h4 className={styles.filterTitle}>Filter by category:</h4>
            <div className={styles.categories}>
              {categories?.map((category, index) => (
                <React.Fragment key={category}>
                  <motion.h2
                    style={{
                      color:
                        filters && filters.includes(category)
                          ? "#3cc96b"
                          : "white",
                    }}
                    className={styles.categoryLabel}
                    onClick={() => {
                      const filts = [...filters];
                      if (filts.includes(category)) {
                        const newArray = filts.filter(
                          (cate) => cate !== category
                        );
                        updateFilters(newArray);
                      } else {
                        filts.push(category);
                        updateFilters(filts);
                      }
                    }}
                  >
                    {category}
                  </motion.h2>
                  {index !== categories.length - 1 && <span>-</span>}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
      </div>
      <div className={styles.images}>
        {activePhotos.length > 0 &&
          videos &&
          (currentMediaIndex === 0
            ? activePhotos.map((photo, index) => {
                const assetPath = photo.asset_folder.split("/");
                const category =
                  assetPath[assetPath.length - 1].charAt(0).toUpperCase() +
                  assetPath[assetPath.length - 1].slice(1);

                return filters &&
                  (filters.length === 0 || filters.includes(category)) ? (
                  <div
                    className={styles.galleryImg}
                    key={photo.public_id}
                    role="img"
                    onClick={() => setActiveIndex(index)}
                  >
                    <GalleryImg image={photo.url} alt={photo.public_id} />
                  </div>
                ) : null;
              })
            : videos.resources.map((video) => (
                <video key={video.public_id} controls muted>
                  <source src={`${video.url}#t=0.001`} type="video/mp4" />
                </video>
              )))}
      </div>
      <Lightbox
        plugins={[Video]}
        index={activeIndex}
        open={activeIndex >= 0}
        close={() => setActiveIndex(-1)}
        slides={photos.resources.map((photo) => ({
          src: photo.url,
        }))}
      />
    </div>
  );
}
