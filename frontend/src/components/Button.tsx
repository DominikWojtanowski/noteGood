import type React from "react";
import type { MouseEventHandler } from "react";

export interface ButtonValues {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ Icon, handleClick }: ButtonValues) {
  return (
    <button className="button_icon" onClick={handleClick}>
      <Icon />
    </button>
  );
}
