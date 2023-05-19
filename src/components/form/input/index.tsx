import { forwardRef } from "react";

import { Input_ } from "./styles";

const Input = forwardRef(({ ...props }, ref) => {
  return <Input_ {...props} ref={ref} />;
});

export default Input;
