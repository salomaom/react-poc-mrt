import { useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";

import {
  CgSun,
  CgEditHighlight,
  CgArrowsExchangeAlt,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";

import Slider from "../Slider";

import {
  Gallery,
  GalleryTopContainer,
  Image,
  LargeImagesContainer,
  Filters,
  Filter,
  FilterDivider,
  FilterValue,
  IconStyle,
} from "./styles";

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
      <Gallery>
        <GalleryTopContainer>
          <LargeImagesContainer>
            <Image src={images[0]} alt="Not informed" />
            <Image src={images[1]} alt="Not informed" />
          </LargeImagesContainer>
          <Filters>
            <Filter>
              <CgSun style={IconStyle} />
              <Slider />
              <FilterValue>90%</FilterValue>
            </Filter>
            <FilterDivider />
            <Filter>
              <CgEditHighlight style={IconStyle} />
              <Slider />
              <FilterValue>90%</FilterValue>
            </Filter>
            <FilterDivider />
            <Filter>
              <CgArrowsExchangeAlt style={IconStyle} />
              <Slider />
              <FilterValue>90%</FilterValue>
            </Filter>
          </Filters>
        </GalleryTopContainer>
        <LargeImagesContainer>
          {images.map((pic: string, index: number) => (
            <Image
              onClick={() => openLightBox(index)}
              className="gallery-image"
              src={pic}
              alt={"PIC_" + index}
              key={"PIC_" + index}
            />
          ))}
        </LargeImagesContainer>
      </Gallery>

      {isLightBoxOpen && (
        <>
          <div className="light-box-container">
            <div className="lb-close-container">
              <span onClick={closeLightBox} className="lb-icon lb-close">
                X
              </span>
            </div>
            <div className="light-box">
              <CgChevronLeft onClick={prev} className="left lb-icon" />
              <img
                className="light-box-image"
                src={currentLightboxImage}
                alt="one"
              />
              <CgChevronRight onClick={next} className="right lb-icon" />
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
