import { useState } from "react";
import { type Airport } from "../Hooks/useAirportData";
import useAirportData from "../Hooks/useAirportData";
import useClimateData from "../Hooks/useClimateData";
import AirportInput from "./AirportInput";
import { useDebounce } from "use-debounce";

function AirportForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [originSearch, setOriginSearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [debounceOrigin] = useDebounce(originSearch, 1000);
  const [debounceDestination] = useDebounce(destinationSearch, 1000);

  const { data, isLoading, error } = useAirportData();
  const {
    isLoading: load,
    error: err,
    data: climatedata,
  } = useClimateData(origin, destination, passengers);

  if (isLoading && load) return <p>Loading...</p>;
  if (error && err) return <p>Something has occurred...</p>;

  const handleClickFromListOrigin = (e: React.MouseEvent<HTMLUListElement>) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      console.log("clicked: ", searchItem);
      setOriginSearch(searchItem || "");
      setOrigin(searchItem || "");
      setSuggestions([]);
    }
  };

  const handleClickFromListDestination = (
    e: React.MouseEvent<HTMLUListElement>
  ) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      console.log("clicked: ", searchItem);
      setDestinationSearch(searchItem || "");
      setDestination(searchItem || "");
      setSuggestions([]);
    }
  };

  const handleChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOriginSearch(value);
    handleFilterItems(data, value, "origin");
  };

  const handleChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestinationSearch(value);
    handleFilterItems(data, value, "destination");
  };

  const handleFilterItems = (
    data: Airport,
    query: string,
    type: "origin" | "destination"
  ) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setSuggestions([]);
      return;
    }

    const filteredElements = Array.isArray(data)
      ? data.filter(
          (values: Airport) =>
            values.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
            values.country.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
            values.code.toLowerCase().includes(trimmedQuery.toLowerCase())
        )
      : [];
    setSuggestions(filteredElements);
  };

  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={handleChangeOrigin}
          value={originSearch}
          airportData={suggestions}
          onClick={handleClickFromListOrigin}
        />
        <AirportInput
          placeholder="Enter arrival airport"
          text="To:"
          onChange={handleChangeDestination}
          value={destinationSearch}
          airportData={suggestions}
          onClick={handleClickFromListDestination}
        />
      </form>
    </div>
  );
}

export default AirportForm;
