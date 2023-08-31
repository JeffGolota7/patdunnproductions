import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "./Modal";
import VideoModal from "./VideoModal";
import "../styles/gallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Gallery() {
  const [activeFilters, updateActiveFilters] = useState([]);
  const [images, setImages] = useState();
  const [videos, setVideos] = useState();
  const [imageToDisplay, updateImageToDisplay] = useState();
  const [videoToDisplay, updateVideoToDisplay] = useState();
  const importAll = (r) => r.keys().map(r);

  useEffect(() => {
    const cachedImages = localStorage.getItem("cachedImages");
    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
    } else {
      const fetchedImages = importAll(
        require.context("../img", true, /\.(png|jpg)$/)
      );
      setImages(fetchedImages);
      localStorage.setItem("cachedImages", JSON.stringify(fetchedImages));
    }
  }, []);

  useEffect(() => {
    const cachedVideos = localStorage.getItem("cachedVideos");
    if (cachedVideos) {
      // Parse cachedImages JSON and set it to images state
      setVideos(JSON.parse(cachedVideos));
    } else {
      // Fetch images and set them to images state
      const fetchedVideos = importAll(
        require.context("../../public/videos", true, /\.(mp4)$/)
      );
      setVideos(fetchedVideos);
      // Cache the fetched images in localStorage
      localStorage.setItem("cachedVideos", JSON.stringify(fetchedVideos));
    }
  }, []);

  function openModal(image) {
    document.body.style.overflowY = "hidden";
    updateImageToDisplay(image);
  }
  function openVideoModal(video) {
    document.body.style.overflowY = "hidden";
    updateVideoToDisplay(video);
  }

  function updateFilter(filter) {
    updateActiveFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  }

  return (
    <div className="gallery-page">
      <h1 className="gallery-heading">Videos</h1>
      <div className="videos">
        {videoToDisplay && (
          <VideoModal
            videos={videos}
            videoToDisplay={videoToDisplay}
            updateVideoToDisplay={updateVideoToDisplay}
          />
        )}
        {videos &&
          videos.map((vidPath) => {
            return (
              <div className="video">
                <video
                  src={vidPath}
                  className="gallery-vid"
                  muted
                  playsInline
                />
                <div
                  className="thumbnail-overlay"
                  onClick={() => openVideoModal(vidPath)}
                >
                  <svg
                    fill="#000000"
                    height="800px"
                    width="800px"
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 481 481"
                    className="playIcon"
                  >
                    <g>
                      <g>
                        <path
                          fill="#ffffff"
                          d="M410.6,70.4C365.1,25,304.7,0,240.5,0S115.9,25,70.4,70.4C25,115.9,0,176.3,0,240.5s25,124.6,70.4,170.1
			C115.8,456,176.2,481,240.5,481s124.6-25,170.1-70.4C456,365.2,481,304.8,481,240.5S456,115.9,410.6,70.4z M240.5,454
			C122.8,454,27,358.2,27,240.5S122.8,27,240.5,27S454,122.8,454,240.5S358.2,454,240.5,454z"
                        />
                        <path
                          fill="#ffffff"
                          d="M349.2,229.1l-152.6-97.9c-4.2-2.7-9.4-2.9-13.8-0.5c-4.3,2.4-7,6.9-7,11.8v195.7c0,4.9,2.7,9.5,7,11.8
			c2,1.1,4.3,1.7,6.5,1.7c2.5,0,5.1-0.7,7.3-2.1l152.6-97.9c3.9-2.5,6.2-6.8,6.2-11.4S353,231.6,349.2,229.1z M202.8,313.7V167.3
			l114.1,73.2L202.8,313.7z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            );
          })}
      </div>
      <h1 className="gallery-heading">Photos</h1>
      <div className="filters">
        <button
          className={`filterButton ${
            activeFilters.includes("creativelighting") ? "active" : "inactive"
          }`}
          onClick={() => updateFilter("creativelighting")}
        >
          Creative Lighting
        </button>
        <button
          className={`filterButton ${
            activeFilters.includes("nature") ? "active" : "inactive"
          }`}
          onClick={() => updateFilter("nature")}
        >
          Nature
        </button>
        <button
          className={`filterButton ${
            activeFilters.includes("sports") ? "active" : "inactive"
          }`}
          onClick={() => updateFilter("sports")}
        >
          Sports
        </button>
        <button
          className={`filterButton ${
            activeFilters.includes("travel") ? "active" : "inactive"
          }`}
          onClick={() => updateFilter("travel")}
        >
          Travel
        </button>
      </div>
      <div className="gallery">
        {imageToDisplay && (
          <Modal
            images={images}
            activeFilters={activeFilters}
            imageToDisplay={imageToDisplay}
            updateImageToDisplay={updateImageToDisplay}
          />
        )}

        {images &&
          images.map((imagePath) => {
            const fileName = imagePath.split("/").pop();
            let subdirectory = fileName.substring(0, 1);

            if (subdirectory) {
              switch (subdirectory) {
                case "c":
                  subdirectory = "creativelighting";
                  break;
                case "n":
                  subdirectory = "nature";
                  break;
                case "s":
                  subdirectory = "sports";
                  break;
                case "t":
                  subdirectory = "travel";
                  break;
                default:
                  break;
              }
            }
            return (
              <div key={imagePath}>
                {(activeFilters.includes(subdirectory) ||
                  activeFilters.length === 0) && (
                  <LazyLoadImage
                    className="gallery-image"
                    effect="blur"
                    onClick={() => openModal(imagePath)}
                    src={imagePath}
                    alt={subdirectory}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
