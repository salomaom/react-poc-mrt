import * as RadixAccordion from "@radix-ui/react-accordion";
import { AccordionItemProps } from "@radix-ui/react-accordion";

import "../styles.css";

function Item({ children, ...props }: AccordionItemProps) {
  return <RadixAccordion.Item {...props}>{children}</RadixAccordion.Item>;
}

export default Item;
