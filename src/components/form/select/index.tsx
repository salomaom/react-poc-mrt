import React from "react";
import * as Select from "@radix-ui/react-select";
import { styled } from "@stitches/react";

import { CgChevronUp, CgChevronDown, CgCheck } from "react-icons/cg";

export const SelectDemo = () => (
  <Select.Root>
    <SelectTrigger aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <SelectIcon>
        <CgChevronDown />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <CgChevronUp />
        </SelectScrollUpButton>
        <SelectViewport>
          <Select.Group>
            {/* <SelectLabel>TAG</SelectLabel> */}
            <SelectItem value="tag">TAG</SelectItem>
            <SelectItem value="money">Dinheiro</SelectItem>
            <SelectItem value="debit">Cartão de débito</SelectItem>
            <SelectItem value="credit">Cartão de crédito</SelectItem>
            <SelectItem value="nonStop">Sem Parar</SelectItem>
            <SelectItem value="veloe">Veloe</SelectItem>
          </Select.Group>
        </SelectViewport>
        <SelectScrollDownButton>
          <CgChevronDown />
        </SelectScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>
);

const SelectTrigger = styled(Select.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: "8px 16px",
  boxShadow: `box-shadow: 0px 2px 0px 0px #00000004`,
  border: "1px solid rgb(214, 215, 218)",
  width: "100%",
  margin: "4px",
  boxSizing: "border-box",
  height: "42px",

  "&:focus": {
    border: "2px solid black",
  },
});

const SelectIcon = styled(Select.SelectIcon, {});

const SelectContent = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 4,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const SelectViewport = styled(Select.Viewport, {
  padding: 8,
});

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CgCheck />
      </StyledItemIndicator>
    </StyledItem>
  );
});

const StyledItem = styled(Select.Item, {
  lineHeight: 1,
  color: "black",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "#009265",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "#009265",
    color: "white",
  },
});

const SelectLabel = styled(Select.Label, {
  padding: "0 25px",
  lineHeight: "25px",
  color: "#009265",
});

const SelectSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: "violet",
  margin: 5,
});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: "violet",
  cursor: "default",
};

const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
);

export default SelectDemo;
