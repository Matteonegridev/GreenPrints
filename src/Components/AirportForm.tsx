import { useState } from "react";
import useAirportData from "../Hooks/useAirportData";
import useClimateData from "../Hooks/useClimateData";
import AirportInput from "./AirportInput";

function AirportForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  // const [originSearch, setOriginSearch] = useState("");
  // const [destinationSearch, setDestinationSearch] = useState("");
  const [passengers, setPassengers] = useState(1);

  const { search, suggestions, setSearch, isLoading, error } = useAirportData();
  const {
    isLoading: load,
    error: err,
    data,
  } = useClimateData(origin, destination, passengers);

  if (isLoading && load) return <p>Loading...</p>;
  if (error && err) return <p>Something has occurred...</p>;

  const handleClickFromList = (e: React.MouseEvent<HTMLUListElement>) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      setSearch(searchItem || "");
    }
  };

  const handleChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setOriginSearch(e.target.value);
    setSearch(e.target.value);
  };

  const handleChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setDestinationSearch(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={handleChangeOrigin}
          value={search}
          airportData={suggestions}
          onClick={handleClickFromList}
        />
        <AirportInput
          placeholder="Enter arrival airport"
          text="To:"
          onChange={handleChangeDestination}
          value={search}
          airportData={suggestions}
          onClick={handleClickFromList}
        />
      </form>
    </div>
  );
}

export default AirportForm;
