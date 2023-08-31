import React, { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import "../styles/carousel.css";

export default function Carousel() {
  const [videos, setVideos] = useState([]);
  const [isDragStart, setDragStart] = useState(false);
  const [videoToDisplay, updateVideoToDisplay] = useState();
  const importAll = (r) => r.keys().map(r);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

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

  useEffect(() => {
    const carousel = document.querySelector(".videos-container");

    setDragStart(false);
    let prevPageX, prevScrollLeft;

    const dragStart = (e) => {
      setDragStart(true);
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      let positionDiff = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
      setDragStart(false);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);
  }, [isDragStart]);
  return (
    <div className="video-carousel">
      {videoToDisplay && (
        <VideoModal
          videos={videos}
          videoToDisplay={videoToDisplay}
          updateVideoToDisplay={updateVideoToDisplay}
        />
      )}
      <div className="videos-container">
        {videos.map((vid) => (
          <>
            <video
              src={vid}
              className="video"
              type="video/mp4"
              muted
              playsInline
              onMouseOver={(event) => {
                if (!isIOS) {
                  event.target.play();
                }
              }}
              onMouseOut={(event) => {
                event.target.pause();
              }}
              onClick={() => {
                if (!isDragStart) {
                  updateVideoToDisplay(vid);
                }
              }}
            ></video>
          </>
        ))}
      </div>
    </div>
  );
}
