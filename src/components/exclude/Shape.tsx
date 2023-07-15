import React from "react";

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoShapeType = Exclude<ShapeType, "cube">;

type ThemeType = "dark" | "light";
type ColorType = "red" | "blue" | "yellow";

type ItemProps = {
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};

const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: TwoShapeType = "square";

  return <div>Shape</div>;
};

export default Shape;
