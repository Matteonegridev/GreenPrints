import useAirportData from "../Hooks/useAirportData";
import AirportInput from "./AirportInput";

function AirportForm() {
  const { search, suggestions, setSearch, isLoading, error } = useAirportData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something has occurred...</p>;

  const handleClickFromList = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "LI") {
      console.log("clicked on: ", target.textContent);
      setSearch(target.textContent || "");
    }
  };

  const handleChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={handleChangeList}
          value={search}
          airportData={suggestions}
          onClick={handleClickFromList}
        />
      </form>
    </div>
  );
}

export default AirportForm;
