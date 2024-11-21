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
      <label className=" 2xl:text-2xl font-subHeadings text-2xl font-medium -mb-4 xl:text-3xl xl:leading-none ">
        {text}
      </label>
      <input
        value={passengers}
        onChange={handlePassengerChange}
        className="dark:bg-clearDark dark:border-primary dark:focus:border-2 px-1 py-2 outline-none border border-secondary rounded-md focus:border-2 xl:py-4 xl:text-2xl xl:pl-2"
        type="number"
      />
    </>
  );
}

export default SelectPassenger;
