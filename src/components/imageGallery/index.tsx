import { useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";

import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

export type ImageGalleryProps = {
  images: string[];
};

function ImageGallery({ images }: ImageGalleryProps) {
  const [currentLightboxImage, setCurrentLightboxImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  useHotkeys("esc", () => closeLightBox(), {
    preventDefault: true,
  });

  const openLightBox = (index: number) => {
    setCurrentIndex(index);
    setCurrentLightboxImage(images[currentIndex]);
    setIsLightBoxOpen(true);
  };

  const closeLightBox = () => setIsLightBoxOpen(false);

  const next = () => {
    const newCurrentIndex = currentIndex + 1;
    setCurrentIndex(newCurrentIndex);
    if (newCurrentIndex > images.length - 1) {
      setCurrentIndex(0);
    }
    setCurrentLightboxImage(images[newCurrentIndex]);
  };

  const prev = () => {
    const newCurrentIndex = currentIndex - 1;
    setCurrentIndex(newCurrentIndex);
    if (newCurrentIndex < 0) {
      setCurrentIndex(images.length - 1);
    }
    setCurrentLightboxImage(images[newCurrentIndex]);
  };
  return (
    <>
      <div className="gallery">
        {images.map((pic: string, index: number) => (
          <img
            onClick={() => openLightBox(index)}
            className="gallery-image"
            src={pic}
            alt={"PIC_" + index}
            key={"PIC_" + index}
          />
        ))}
      </div>

      {isLightBoxOpen && (
        <>
          <div className="light-box-container">
            <div className="lb-close-container">
              <span onClick={closeLightBox} className="lb-icon lb-close">
                X
              </span>
            </div>
            <div className="light-box">
              <TriangleLeftIcon onClick={prev} className="left lb-icon" />
              <img
                className="light-box-image"
                src={currentLightboxImage}
                alt="one"
              />
              <TriangleRightIcon onClick={next} className="right lb-icon" />
            </div>
            <span>COUNT</span>
          </div>
          <div className="overlay"></div>
        </>
      )}
    </>
  );
}

export default ImageGallery;
