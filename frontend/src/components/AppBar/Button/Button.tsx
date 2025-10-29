import type React from "react";
import styles from "./Button.module.css";

export interface ButtonValues extends React.HTMLAttributes<HTMLElement> {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function Button({ Icon, ...props }: ButtonValues) {
  return (
    <button className={styles.button} {...props}>
      <Icon />
    </button>
  );
}
