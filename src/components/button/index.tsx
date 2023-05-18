import { ButtonHTMLAttributes } from "react";

import { Button_ } from "./styles";

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Button_ {...props}>{children}</Button_>;
}

export default Button;
