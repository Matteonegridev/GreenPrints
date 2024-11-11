import { SetStateAction } from "react";
import useKeyEvent from "../Hooks/useKeyEvent";
import ElementLists from "./ElementLists";
import { type Airport } from "../Hooks/useAirportData";

type InputProps = {
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  airportData: { country: string; code: string; name: string }[];
  onClick: (e: React.MouseEvent<HTMLUListElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSuggestions: React.Dispatch<
    SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >;
  type: "origin" | "destination";
};

function AirportInput({
  text,
  placeholder,
  value,
  onChange,
  onClick,
  airportData,
  setSearch,
  setSuggestions,
  type,
}: InputProps) {
  const { selectedItem, handleKeyEvent } = useKeyEvent(
    airportData,
    setSearch,
    setSuggestions,
    type
  );

  return (
    <>
      <label htmlFor="airportInput">{text}</label>
      <input
        autoComplete="off"
        id="airportInput"
        tabIndex={0}
        required
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-1 outline-none border"
        onKeyDown={handleKeyEvent}
      />
      <ul onClick={onClick}>
        <ElementLists
          selectedItem={selectedItem}
          filteredElements={airportData}
        />
      </ul>
    </>
  );
}

export default AirportInput;
