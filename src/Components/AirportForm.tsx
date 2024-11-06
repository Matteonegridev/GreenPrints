import { useEffect, useState } from "react";
import { type Airport } from "../Hooks/useAirportData";
import useAirportData from "../Hooks/useAirportData";
import useClimateData from "../Hooks/useClimateData";
import AirportInput from "./AirportInput";
import { useDebounce } from "use-debounce";

function AirportForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState<{
    origin: Airport[];
    destination: Airport[];
  }>({
    origin: [],
    destination: [],
  });
  const [originSearch, setOriginSearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [debounceOrigin] = useDebounce(originSearch, 200);
  const [debounceDestination] = useDebounce(destinationSearch, 200);

  const { data, isLoading, error } = useAirportData();
  const {
    isLoading: load,
    error: err,
    data: climatedata,
  } = useClimateData(origin, destination, passengers);

  // useEffect per il debounce cosi che il dato è richiamato quando si smette di scrivere:
  useEffect(() => {
    if (debounceOrigin) {
      handleFilterItems(data, debounceOrigin, "origin");

      console.log(debounceOrigin);
    } else {
      setSuggestions((prev) => ({ ...prev, origin: [] }));
    }
  }, [data, debounceOrigin]);

  // useEffect per il debounce cosi che il dato è richiamato quando si smette di scrivere:
  useEffect(() => {
    if (debounceDestination) {
      handleFilterItems(data, debounceDestination, "destination");
    } else {
      setSuggestions((prev) => ({ ...prev, destination: [] }));
    }
  }, [data, debounceDestination]);

  if (isLoading && load) return <p>Loading...</p>;
  if (error && err) return <p>Something has occurred...</p>;

  // funzione filter passata allo useEffect in modo da poter utilizzare il debounce:
  const handleFilterItems = (
    data: Airport,
    query: string,
    type: "origin" | "destination"
  ) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
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

    setSuggestions((prev) => ({ ...prev, [type]: filteredElements }));
  };

  const handleClickFromListOrigin = (e: React.MouseEvent<HTMLUListElement>) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      console.log("clicked: ", searchItem);
      setOriginSearch(searchItem || "");
      setOrigin(searchItem || "");
      setSuggestions((prev) => ({ ...prev, origin: [] }));
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
      setSuggestions((prev) => ({ ...prev, destination: [] }));
    }
  };

  const handleChangeOrigin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOriginSearch(value);
  };

  const handleChangeDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestinationSearch(value);
  };

  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={handleChangeOrigin}
          value={originSearch}
          airportData={suggestions.origin}
          onClick={handleClickFromListOrigin}
        />
        <AirportInput
          placeholder="Enter arrival airport"
          text="To:"
          onChange={handleChangeDestination}
          value={destinationSearch}
          airportData={suggestions.destination}
          onClick={handleClickFromListDestination}
        />
      </form>
    </div>
  );
}

export default AirportForm;
