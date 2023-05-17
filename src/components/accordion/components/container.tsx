import * as RadixAccordion from "@radix-ui/react-accordion";
import {
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";

import "../styles.css";

function Container({
  children,
  ...props
}: AccordionSingleProps | AccordionMultipleProps): JSX.Element {
  return <RadixAccordion.Root {...props}>{children}</RadixAccordion.Root>;
}

export default Container;
