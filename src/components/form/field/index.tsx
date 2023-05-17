import { Field as RadixField, FormFieldProps } from "@radix-ui/react-form";

export default function Label({ children, name }: FormFieldProps) {
  return <RadixField name={name}>{children}</RadixField>;
}
