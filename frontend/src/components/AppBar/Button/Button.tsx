import styles from "./Button.module.css";
import type ButtonProps from "./Button.types";
export default function Button({ Icon, onClickEventHandler }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClickEventHandler}>
      <Icon />
    </button>
  );
}
