import { styled } from "@stitches/react";

export const Gallery = styled("div", {
  backgroundColor: "LightSlateGray",
  borderRadius: "16px",
  padding: "8px",
  margin: "8px",
});

export const GalleryTopContainer = styled("div", {
  backgroundColor: "#EFF0F6",
  padding: "8px",
  borderRadius: "16px",
});

export const ImageContainer = styled("div", {
  margin: "8px",
});

export const Image = styled("img", {
  borderRadius: "8px",
});

export const LargeImagesContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
});

// export const SmallImagesContainer = styled("div", {
//   display: "flex",
//   width: "100%",
// });

export const Filters = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  height: "3rem",
  margin: "8px",
});

export const Filter = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "25%",
});

export const FilterDivider = styled("span", {
  borderRight: "solid 2px #D9DBE9",
});

export const FilterValue = styled("p", {
  padding: "4px 8px",
  backgroundColor: "#21212114",
  borderRadius: "4px",
  color: "#4E4B66",
  fontSize: "0.75rem",
  fontWeight: "bold",
  marginLeft: "8px",
});

export const IconStyle = { marginRight: "8px", fontSize: "2rem" };

const ChevronStyle = {
  fontSize: "3rem",
  color: "white",
  margin: "24px",
  cursor: "pointer",
  position: "absolute",
  top: "40%",
};

export const ChevronStyleLeft = {
  ...ChevronStyle,
};

export const ChevronStyleRight = {
  ...ChevronStyle,
  right: 0,
};

export const ImageOverlay = styled("img", {
  margin: "auto",
});
