type Props = {
  passengers: number;
  setPassengers: React.Dispatch<React.SetStateAction<number>>;
};

function SelectPassenger({ passengers, setPassengers }: Props) {
  function handlePassengerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = parseInt(e.target.value);
    setPassengers(target);
  }

  return (
    <input
      value={passengers}
      onChange={handlePassengerChange}
      className="border border-black"
      type="number"
    />
  );
}

export default SelectPassenger;
