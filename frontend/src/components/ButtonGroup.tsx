import type { ButtonValues } from "./Button";
import Button from "./Button";
export default function ButtonGroup({
  buttonValue,
}: {
  buttonValue: ButtonValues[];
}) {
  return (
    <>
      {buttonValue.map((singleButtonValue) => {
        return (
          <Button
            icon={singleButtonValue.buttonIconName}
            clickFunction={singleButtonValue.buttonClickFucntion}
          ></Button>
        );
      })}
    </>
  );
}
