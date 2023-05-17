import * as RadixAccordion from "@radix-ui/react-accordion";
import { CollapsibleContentProps } from "@radix-ui/react-accordion";

import "../styles.css";

function Content({ children, ...props }: CollapsibleContentProps) {
  return <RadixAccordion.Content {...props}>{children}</RadixAccordion.Content>;
}

export default Content;
