import { Root, Track, Range, Thumb } from "./styles";

const Slider = () => (
  <Root defaultValue={[50]} max={100} step={1} aria-label="Volume">
    <Track>
      <Range />
    </Track>
    <Thumb />
  </Root>
);

export default Slider;
