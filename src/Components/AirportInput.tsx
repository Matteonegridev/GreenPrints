import ElementLists from "./ElementLists";

type InputProps = {
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  airportData: { country: string; code: string; name: string }[];
  onClick: (e: React.MouseEvent<HTMLUListElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function AirportInput({
  text,
  placeholder,
  value,
  onChange,
  airportData,
  onClick,
  onKeyDown,
}: InputProps) {
  return (
    <>
      <label htmlFor="">{text}</label>
      <input
        required
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="px-1 outline-none border"
      />
      <ul onClick={onClick}>
        <ElementLists filteredElements={airportData} />
      </ul>
    </>
  );
}

export default AirportInput;
