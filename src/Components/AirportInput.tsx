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
  onChange,
  onClick,
  airportData,
  setSearch,
  setSuggestions,
  type,
  value,
}: InputProps) {
  const { selectedItem, handleKeyEvent, isListActive } = useKeyEvent(
    airportData,
    setSearch,
    setSuggestions,
    type,
    value
  );

  return (
    <>
      <label
        className="font-subHeadings text-2xl font-medium -mb-4"
        htmlFor="airportInput"
      >
        {text}
      </label>
      <input
        autoComplete="off"
        id="airportInput"
        required
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="dark:bg-clearDark dark:border-primary dark:focus:border-2 px-1 py-2 outline-none border border-secondary rounded-md placeholder:text-inherit placeholder:text-placeholder placeholder:text-slate-300 placeholder:pl-2 focus:border-2 dark:placeholder:text-zinc-400 "
        onKeyDown={handleKeyEvent}
      />
      {isListActive && (
        <ul
          className="overflow-y-scroll h-48 p-1 border border-accent rounded-md "
          onClick={onClick}
        >
          <ElementLists
            selectedItem={selectedItem}
            filteredElements={airportData}
          />
        </ul>
      )}
    </>
  );
}

export default AirportInput;
