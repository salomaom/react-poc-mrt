import { Root, PrimitiveFormProps } from "@radix-ui/react-form";

function Container({ children }: PrimitiveFormProps) {
  return <Root>{children}</Root>;
}

export default Container;
