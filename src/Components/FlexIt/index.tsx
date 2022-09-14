import { Container } from "@mui/material";
import "./style.scope.scss";
interface IFlexProps {
  children?: any;
  dFlex?: boolean;
  Column?: boolean;
  ColumnReverse?: boolean;
  rowReverse?: boolean;
  justifyContent?: {
    active: boolean;
    mode: "start" | "end" | "center" | "between" | "around";
  };
  className?: string;
}

const FlexIt = ({
  className = "",
  children,
  rowReverse,
  Column,
  ColumnReverse,
  justifyContent = {
    active: true,
    mode: "start",
  },
  dFlex = true,
}: IFlexProps) => {
  return (
    <div
      className={
        "flex-default " +
        className +
        (dFlex && "d-flex ") +
        (justifyContent.active ? "justify-content-" + justifyContent.mode : "") +
        (Column ? " flex-column" : "") +
        (Column && ColumnReverse ? "-reverse" : "") +
        (!Column && rowReverse ? " flex-row-reverse" : "")
      }
    >
      {children}
    </div>
  );
};
export default FlexIt;
