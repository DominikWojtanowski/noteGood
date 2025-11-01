import Button from "../Button/Button";
import type ButtonProps from "../Button/Button.types";

export default function ButtonGroup({ Buttons }: { Buttons: ButtonProps[] }) {
  return (
    <>
      {Buttons.map((singleButtonValue, index) => {
        return (
          <Button
            key={index}
            Icon={singleButtonValue.Icon}
            onClickEventHandler={singleButtonValue.onClickEventHandler}
          />
        );
      })}
    </>
  );
}
