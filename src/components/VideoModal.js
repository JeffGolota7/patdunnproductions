import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "../styles/modal.css";

export default function Modal({
  videos,
  videoToDisplay,
  updateVideoToDisplay,
}) {
  const videoSet = videos;

  function handleOnClick(increment) {
    if (videoSet !== []) {
      if (increment === -1) {
        if (
          videoSet[videoSet.indexOf(videoToDisplay) + increment] === undefined
        ) {
          updateVideoToDisplay(videoSet[videoSet.length - 1]);
        } else {
          updateVideoToDisplay(
            videoSet[videoSet.indexOf(videoToDisplay) + increment]
          );
        }
      } else {
        if (
          videoSet[videoSet.indexOf(videoToDisplay) + increment] === undefined
        ) {
          updateVideoToDisplay(videoSet[0]);
        } else {
          updateVideoToDisplay(
            videoSet[videoSet.indexOf(videoToDisplay) + increment]
          );
        }
      }
    }
  }

  useEffect(() => {
    document
      .querySelector(".video-modal-container")
      .addEventListener("click", (e) => {
        if (e.target === document.querySelector(".video-modal-container")) {
          document.body.style.overflowY = "inherit";
          updateVideoToDisplay();
        }
      });
  }, [updateVideoToDisplay]);

  return (
    <div className="video-modal-container">
      <button className="button backBtn" onClick={() => handleOnClick(-1)}>
        {"<"}
      </button>
      <ReactPlayer
        url={videoToDisplay}
        className="modal-video"
        playsInline
        controls
      />
      <button className="button forwardBtn" onClick={() => handleOnClick(1)}>
        {">"}
      </button>
      <div className="mobile-btns">
        <button className="backBtn" onClick={() => handleOnClick(-1)}>
          {"<"}
        </button>
        <button className="forwardBtn" onClick={() => handleOnClick(1)}>
          {">"}
        </button>
      </div>
    </div>
  );
}
