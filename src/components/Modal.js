import React, { useEffect, useState } from "react";
import "../styles/modal.css";

export default function Modal({
  images,
  activeFilters,
  imageToDisplay,
  updateImageToDisplay,
}) {
  const [imageSet, updateImageSet] = useState(images);
  function handleOnClick(increment) {
    if (imageSet !== []) {
      if (increment === -1) {
        if (
          imageSet[imageSet.indexOf(imageToDisplay) + increment] === undefined
        ) {
          updateImageToDisplay(imageSet[imageSet.length - 1]);
        } else {
          updateImageToDisplay(
            imageSet[imageSet.indexOf(imageToDisplay) + increment]
          );
        }
      } else {
        if (
          imageSet[imageSet.indexOf(imageToDisplay) + increment] === undefined
        ) {
          updateImageToDisplay(imageSet[0]);
        } else {
          updateImageToDisplay(
            imageSet[imageSet.indexOf(imageToDisplay) + increment]
          );
        }
      }
    }
  }

  useEffect(() => {
    if (activeFilters && activeFilters.length > 0 && images) {
      let imgs = [];
      activeFilters.forEach((filter) => {
        images.forEach((img) => {
          let subdir = img.split("/").pop().substring(0, 1);
          if (subdir === filter[0]) {
            imgs.push(img);
          }
        });
      });
      updateImageSet(imgs);
    } else {
      updateImageSet(images);
    }

    document
      .querySelector(".modal-container")
      .addEventListener("click", (e) => {
        if (e.target === document.querySelector(".modal-container")) {
          document.body.style.overflowY = "inherit";
          updateImageToDisplay();
        }
      });
  }, [activeFilters, images, updateImageToDisplay]);

  return (
    <div className="modal-container">
      <button className="button backBtn" onClick={() => handleOnClick(-1)}>
        {"<"}
      </button>
      <img className="modal-image" src={imageToDisplay} alt="" />
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
