import Button from "../Button/Button";
import MenuSVG_24 from "../../../assets/MenuSVG_24";
import RefreshSVG_24 from "../../../assets/RefreshSVG_24";
import ViewAsGridSVG_24 from "../../../assets/ViewAsGridSVG_24";
import ViewAsListSVG_24 from "../../../assets/ViewAsListSVG_24";
import SettingsSVG_24 from "../../../assets/SettingsSVG_24";
import AppsSVG_24 from "../../../assets/AppsSVG_24";

import SearchBar from "../SearchBar/SearchBar";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default function AppBar({
  activationLabel,
}: {
  activationLabel: string;
}) {
  return (
    <>
      <Button Icon={MenuSVG_24} />
      {activationLabel}
      <SearchBar placeholder="Search" whenChangeLayoutWidth={800} />
      <ButtonGroup
        buttonValue={[RefreshSVG_24, ViewAsGridSVG_24, SettingsSVG_24]}
      />
    </>
  );
}
