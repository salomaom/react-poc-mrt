import { useState, useEffect } from "react";

import { useHotkeys } from "react-hotkeys-hook";

import {
  CgSun,
  CgEditHighlight,
  CgEditContrast,
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
  ImageContainer,
  ChevronStyleLeft,
  ChevronStyleRight,
  ImageOverlay,
} from "./styles";

export type ImageGalleryProps = {
  images: string[];
};

function ImageGallery({ images }: ImageGalleryProps) {
  const [currentLightboxImage, setCurrentLightboxImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const [brightness, setBrightness] = useState([100]);
  const [invert, setInvert] = useState([0]);
  const [contrast, setContrast] = useState([100]);

  const [imageFilter, setImageFilters] = useState({});

  useEffect(() => {
    setImageFilters({
      filter: `brightness(${brightness[0] / 100}) invert(${
        invert[0] / 100
      }) contrast(${contrast[0] / 100})`,
    });
  }, [brightness, invert, contrast]);

  useHotkeys("esc", () => closeLightBox(), {
    preventDefault: true,
  });

  useHotkeys(
    "ctrl+u",
    () => (brightness[0] === 100 ? setBrightness([300]) : setBrightness([100])),
    {
      preventDefault: true,
    }
  );

  useHotkeys(
    "ctrl+i",
    () => (invert[0] === 0 ? setInvert([100]) : setInvert([0])),
    {
      preventDefault: true,
    }
  );

  useHotkeys(
    "ctrl+o",
    () => (contrast[0] === 100 ? setContrast([400]) : setContrast([100])),
    {
      preventDefault: true,
    }
  );

  useHotkeys("ctrl+1", () => openLightBox(0), {
    preventDefault: true,
  });

  useHotkeys("left", () => prev(), {
    preventDefault: true,
  });

  useHotkeys("right", () => next(), {
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
            <ImageContainer>
              <Image src={images[0]} alt="Not informed" style={imageFilter} />
            </ImageContainer>
            <ImageContainer>
              <Image src={images[1]} alt="Not informed" style={imageFilter} />
            </ImageContainer>
          </LargeImagesContainer>
          <Filters>
            <Filter>
              <CgSun style={{ ...IconStyle, fontSize: "1.6rem" }} />
              <Slider
                value={brightness}
                onValueChange={(value: number[]) => setBrightness(value)}
                min={100}
                max={400}
              />
              <FilterValue>{brightness[0] - 100}%</FilterValue>
            </Filter>
            <FilterDivider />
            <Filter>
              <CgEditHighlight style={IconStyle} />
              <Slider
                value={invert}
                onValueChange={(value: number[]) => setInvert(value)}
              />
              <FilterValue>{invert}%</FilterValue>
            </Filter>
            <FilterDivider />
            <Filter>
              <CgEditContrast style={IconStyle} />
              <Slider
                value={contrast}
                onValueChange={(value: number[]) => setContrast(value)}
                min={100}
                max={600}
              />
              <FilterValue>{contrast[0] - 100}%</FilterValue>
            </Filter>
          </Filters>
        </GalleryTopContainer>
        <LargeImagesContainer>
          {images.map((pic: string, index: number) => (
            <ImageContainer key={"PIC_" + index}>
              <Image
                onClick={() => openLightBox(index)}
                className="gallery-image"
                src={pic}
                alt={"PIC_" + index}
                style={imageFilter}
              />
            </ImageContainer>
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
              <CgChevronLeft onClick={prev} style={ChevronStyleLeft} />
              <ImageOverlay
                className="light-box-image"
                src={currentLightboxImage}
                alt="one"
                style={imageFilter}
              />
              <CgChevronRight onClick={next} style={ChevronStyleRight} />
            </div>
          </div>
          <div className="overlay"></div>
        </>
      )}
    </>
  );
}

export default ImageGallery;
