import React from "react";
import classNames from "classnames";
import "./Grid.scss";

type ColSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

interface GridProp {
  className?: string;
}

interface RowProp {
  className?: string;
}

interface ColProp {
  className?: string;
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
  xsOffset?: ColSize;
  smOffset?: ColSize;
  mdOffset?: ColSize;
  lgOffset?: ColSize;
}

// Row
export const Row: React.FC<RowProp> = (props) => {
  return (
    <div className={classNames("row", props.className)}>{props.children}</div>
  );
};

// Spacer
export const Spacer: React.FC<{ children?: never }> = () => {
  return <div className="row row-spacer" />;
};

// Column
export const Col: React.FC<ColProp> = (props) => {
  const colClasses = classNames(
    {
      col: true,
      "col-xs": !props.xs,
      [`col-xs-${props.xs}`]: props.xs,
      [`col-sm-${props.sm}`]: props.sm,
      [`col-md-${props.md}`]: props.md,
      [`col-lg-${props.lg}`]: props.lg,
      [`col-xs-offset-${props.xsOffset}`]: props.xsOffset,
      [`col-sm-offset-${props.smOffset}`]: props.smOffset,
      [`col-md-offset-${props.mdOffset}`]: props.mdOffset,
      [`col-lg-offset-${props.lgOffset}`]: props.lgOffset,
    },
    props.className
  );

  return <div className={colClasses}>{props.children}</div>;
};

type IGrid = React.FC<GridProp> & {
  Col: typeof Col,
  Row: typeof Row,
  Spacer: typeof Spacer,
};

// Grid
export const Grid: IGrid = (props) => {
  return (
    <div className={classNames("grid", props.className)}>{props.children}</div>
  );
};

Grid.Col = Col;
Grid.Row = Row;
Grid.Spacer = Spacer;
