import ElementLists from "./ElementLists";

type InputProps = {
  text: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  airportData: { city: string; code: string; name: string }[];
  onClick: (e: React.MouseEvent<HTMLUListElement>) => void;
};

function AirportInput({
  text,
  placeholder,
  value,
  onChange,
  airportData,
  onClick,
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
        className="px-1 outline-none border border-black"
      />
      <ul onClick={onClick}>
        <ElementLists filteredElements={airportData} />
      </ul>
    </>
  );
}

export default AirportInput;
