import type React from "react";

export interface ButtonValues extends React.HTMLAttributes<HTMLElement> {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function Button({ Icon, ...props }: ButtonValues) {
  return (
    <button className="button_icon" {...props}>
      <Icon />
    </button>
  );
}
