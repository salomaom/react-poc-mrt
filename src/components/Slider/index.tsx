import { Root, Track, Range, Thumb } from "./styles";
import { SliderProps } from "@radix-ui/react-slider";

const Slider = ({ ...props }: SliderProps) => (
  <Root {...props}>
    <Track>
      <Range />
    </Track>
    <Thumb />
  </Root>
);

export default Slider;
