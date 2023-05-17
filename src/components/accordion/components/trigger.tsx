import * as RadixAccordion from "@radix-ui/react-accordion";
import { AccordionTriggerProps } from "@radix-ui/react-accordion";

import "../styles.css";

function Trigger({ children, ...props }: AccordionTriggerProps): JSX.Element {
  return <RadixAccordion.Trigger {...props}>{children}</RadixAccordion.Trigger>;
}

export default Trigger;
