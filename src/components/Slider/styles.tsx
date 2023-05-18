import { styled } from "@stitches/react";
import * as Slider from "@radix-ui/react-slider";

export const Root = styled(Slider.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: '100%',
  height: 20,
});

export const Track = styled(Slider.Track, {
  background:
    "linear-gradient(270deg, #FFFFFF -29.35%, rgba(82, 95, 114, 0.87) 100.09%)",
  position: "relative",
  flexGrow: 1,
  borderRadius: 9999,
  height: 6,
});

export const Range = styled(Slider.Range, {
  position: "absolute",
  background:
    "linear-gradient(270deg, #FFFFFF -29.35%, rgba(82, 95, 114, 0.87) 100.09%)",
  borderRadius: 9999,
  height: "100%",
});

export const Thumb = styled(Slider.Thumb, {
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "#4E4B66",
  boxShadow: "0 2px 10px var(--blackA7)",
  borderRadius: "50%",

  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 5px rgba(82, 95, 114, 0.24)",
  },
});
