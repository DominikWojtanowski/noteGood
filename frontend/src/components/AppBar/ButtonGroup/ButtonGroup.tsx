import Button, { type ButtonValues } from "../Button/Button";

export default function ButtonGroup({
  buttonValue,
}: {
  buttonValue: ButtonValues[];
}) {
  return (
    <>
      {buttonValue.map((singleButtonValue) => {
        return <Button Icon={singleButtonValue.Icon} />;
      })}
    </>
  );
}
