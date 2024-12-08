type Props = {
  passengers: number;
  setPassengers: React.Dispatch<React.SetStateAction<number>>;
  text: string;
};

function SelectPassenger({ passengers, setPassengers, text }: Props) {
  function handlePassengerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = parseInt(e.target.value);
    setPassengers(target);
  }

  return (
    <>
      <label className="font-subHeadings -mb-4 text-2xl font-medium xl:text-3xl xl:leading-none 2xl:text-2xl">
        {text}
      </label>
      <input
        value={passengers}
        onChange={handlePassengerChange}
        className="rounded-md border border-secondary px-1 py-2 shadow-sm shadow-primary outline-none focus:border-2 xl:py-4 xl:pl-2 xl:text-2xl dark:border-primary dark:bg-clearDark dark:focus:border-2"
        type="number"
      />
    </>
  );
}

export default SelectPassenger;
