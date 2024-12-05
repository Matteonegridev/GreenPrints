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
    value,
  );

  return (
    <>
      <label
        className="font-subHeadings -mb-4 text-2xl font-medium xl:text-3xl xl:leading-none 2xl:text-2xl"
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
        className="rounded-md border border-secondary px-1 py-2 outline-none placeholder:pl-2 placeholder:text-placeholder placeholder:text-inherit placeholder:text-slate-300 focus:border-2 xl:py-4 xl:pl-2 xl:text-2xl xl:placeholder:text-xl dark:border-primary dark:bg-clearDark dark:placeholder:text-zinc-400 dark:focus:border-2"
        onKeyDown={handleKeyEvent}
      />
      {isListActive && (
        <ul
          className="h-48 overflow-y-scroll rounded-md border border-accent p-1 md:overflow-y-scroll"
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
