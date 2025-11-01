import type { ComponentType } from "react";

type IconProps = {
  size?: "small" | "medium" | "large";
  color?: string;
};
export interface Icons {
  Icon: ComponentType<IconProps>;
}
