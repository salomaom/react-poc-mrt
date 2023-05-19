import { FormLabelProps } from "@radix-ui/react-form";

import { Label_ } from "./styles";

export default function Label({ children }: FormLabelProps) {
  return <Label_>{children}</Label_>;
}
