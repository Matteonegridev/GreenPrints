import { type Airport } from "../Hooks/useAirportData";
import useKeyEvent from "../Hooks/useKeyEvent";
import ElementLists from "./ElementLists";

type InputProps = {
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  airportData: { country: string; code: string; name: string }[];
  onClick: (e: React.MouseEvent<HTMLUListElement>) => void;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSuggestion: React.Dispatch<
    React.SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >;
  type: "origin" | "destination";
};

function AirportInput({
  text,
  placeholder,
  value,
  onChange,
  airportData,
  onClick,
  setCode,
  setSearch,
  type,
  setSuggestion,
}: InputProps) {
  const { selectedItem, handleKeyEvent } = useKeyEvent(
    airportData,
    setCode,
    setSearch,
    type,
    setSuggestion
  );
  return (
    <>
      <label htmlFor="">{text}</label>
      <input
        required
        tabIndex={0}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyEvent}
        className="px-1 outline-none border border-black"
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
