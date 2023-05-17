import { Label as RadixLabel, FormLabelProps } from "@radix-ui/react-form";

export default function Label({ children }: FormLabelProps) {
  return <RadixLabel>{children}</RadixLabel>;
}
