import { useRef, useState } from "react";
import Button from "./Button.tsx";
import SearchSVG_24 from "../assets/SearchSVG_24";
import CloseSVG_24 from "../assets/CloseSVG_24";
import ArrowBackSVG_24 from "../assets/ArrowBackSVG_24";

export default function SearchBar({
  placeholder,
  whenChangeLayoutWidth,
}: {
  placeholder: string;
  whenChangeLayoutWidth: number;
}) {
  const focusInputRef = useRef<HTMLInputElement | null>(null);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      {isExpanded ? (
        <div className="small-searchbar">
          <Button
            Icon={ArrowBackSVG_24}
            onClick={() => {
              setExpanded(false);
            }}
          ></Button>
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={searchInput}
            ref={focusInputRef}
            onKeyDown={(event) => {
              if (event.key === "Backspace") {
                setSearchInput(searchInput.slice(0, -1));
              } else {
                setSearchInput(searchInput + event.key);
              }
            }}
            onChange={() => {}}
          ></input>
          <Button
            Icon={CloseSVG_24}
            onClick={() => {
              setSearchInput("");
              focusInputRef.current?.focus();
            }}
          ></Button>
        </div>
      ) : (
        <Button
          Icon={SearchSVG_24}
          onClick={() => {
            setExpanded(true);
          }}
        ></Button>
      )}
    </>
  );
}
