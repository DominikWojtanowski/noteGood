import { type Icons } from "../../../types/icon.types";
export default interface ButtonProps extends Icons {
  onClickEventHandler?: React.MouseEventHandler<HTMLButtonElement>;
}
