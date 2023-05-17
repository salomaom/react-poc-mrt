import * as RadixAccordion from "@radix-ui/react-accordion";
import { AccordionHeaderProps } from "@radix-ui/react-accordion";

import "../styles.css";

function Header({ children, ...props }: AccordionHeaderProps): JSX.Element {
  return <RadixAccordion.Header {...props}>{children}</RadixAccordion.Header>;
}

export default Header;
