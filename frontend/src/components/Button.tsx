import type { MouseEventHandler } from "react";

export interface ButtonValues {
  buttonIconName: string;
  buttonClickFucntion: () => MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  icon,
  clickFunction,
}: {
  icon: string;
  clickFunction: () => MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="icon_outlined" onClick={clickFunction()}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}
