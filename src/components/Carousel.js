import React, { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import "../styles/carousel.css";

export default function Carousel() {
  const [videos, setVideos] = useState([]);
  const [videoToDisplay, updateVideoToDisplay] = useState();
  const [isClick, updateIsClick] = useState();
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

    let isDragStart = false;
    updateIsClick(false);
    let prevPageX, prevScrollLeft;
    let clickX = 0;
    let clickY = 0;

    const dragStart = (e) => {
      isDragStart = true;
      updateIsClick(true);
      clickX = e.pageX;
      clickY = e.pageY;
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      const xDiff = Math.abs(e.pageX - clickX);
      const yDiff = Math.abs(e.pageY - clickY);
      if (xDiff > 10 || yDiff > 10) {
        updateIsClick(false);
      } else {
        updateIsClick(true);
      }

      const touchX = e.touches[0].clientX;
      console.log(touchX);
      let positionDiff = (touchX || e.pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const draggingMobile = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      const xDiff = Math.abs(e.pageX - clickX);
      const yDiff = Math.abs(e.pageY - clickY);
      if (xDiff > 10 || yDiff > 10) {
        updateIsClick(false);
      } else {
        updateIsClick(true);
      }

      const touchX = e.touches[0].clientX;
      let positionDiff = touchX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
      isDragStart = false;
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart, { passive: false });

    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", draggingMobile);

    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);
    carousel.addEventListener("touchend", dragStop);
  }, [updateIsClick]);
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
          <div className="video">
            <video
              src={vid}
              type="video/mp4"
              className="actual-video"
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
                console.log(isClick);
                if (isClick) {
                  updateVideoToDisplay(vid);
                }
              }}
            ></video>
            <div className="thumbnail-overlay">
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
        ))}
      </div>
    </div>
  );
}
