import { CardContent, Divider } from "@mui/material";
import "./style.scope.scss";

interface ICardProps {
  className?: string;
  children?: any;
  title?: string;
  titleHorPos?: "center" | "start" | "end";
  textJustify?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  // in case you need to make responsvie card follow the rule
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
const StCard = ({
  className,
  md,
  lg,
  sm,
  xs,
  children = "Component as Test has a Default Value.",
  size,
  title = "Default Title",
  titleHorPos = "start",
  textJustify,
}: ICardProps) => {
  return (
    <div
      className={
        (size ? " col-" + size : "") +
        (sm ? " col-sm-" + sm : "") +
        (lg ? " col-lg-" + lg : "") +
        (md ? " col-md-" + md : "") +
        (xs ? " col-xs-" + xs : "")
      }
    >
      <div className="mb-3 mx-1 st-glass-bg">
        <div className={"m-3 me-0"}>
          <h4 className={"text-" + titleHorPos}>{title}</h4>
        </div>
        <Divider />
        <CardContent>
          <div className={textJustify ? "text-justify" : ""}>{children}</div>
        </CardContent>
      </div>
    </div>
  );
};

export default StCard;
