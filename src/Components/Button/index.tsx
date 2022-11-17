import { Button, ButtonGroup } from "@mui/material";
import { group } from "console";
import { Fragment } from "react";

interface IStButton {
  buttonText?: string;
  onClick?: () => void;
  children?: any;
  group?: boolean;
  groupDef?: any[];
}
type GroupDefintion = {
  key: string;
  value: string;
  size: "sm" | "md" | "lg";
  variant: "outlined" | "contained" | "text";
};
const staticGroupBtn = [
  {
    key: "1",
    value: "Button1",
    size: "lg",
    variant: "contained",
  },
  {
    key: "2",
    value: "Button2",
    size: "lg",
    variant: "outlined",
  },
  {
    key: "3",
    value: "Button3",
    size: "lg",
    variant: "text",
  },
];

const StButton = ({ children, group, groupDef = staticGroupBtn, onClick, buttonText }: IStButton) => {
  return (
    <Fragment>
      {group ? (
        <ButtonGroup>
          {groupDef.map((i: any) => (
            <Button onClick={onClick} size={i.size} variant={i.variant} color="info" key={i.key}>
              {i.value}
            </Button>
          ))}
        </ButtonGroup>
      ) : (
        <Button>{buttonText}</Button>
      )}
    </Fragment>
  );
};
export default StButton;
