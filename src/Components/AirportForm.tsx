import { useEffect, useState } from "react";
import { type Airport } from "../Hooks/useAirportData";
import useAirportData from "../Hooks/useAirportData";
import useClimateData from "../Hooks/useClimateData";
import AirportInput from "./AirportInput";
import { useDebounce } from "use-debounce";
import useKeyEvent from "../Hooks/useKeyEvent";
import ElementLists from "./ElementLists";

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

  const { handleKeyEvent } = useKeyEvent();

  // useEffect per il debounce cosi che il dato è richiamato quando si smette di scrivere:
  useEffect(() => {
    if (debounceOrigin) {
      handleFilterItems(data, debounceOrigin, "origin");

      console.log(debounceOrigin);
    } else {
      // cancellato tutto dall'input la lista scompare:
      setSuggestions((prev) => ({ ...prev, origin: [] }));
    }
  }, [data, debounceOrigin]);

  // useEffect per il debounce cosi che il dato è richiamato quando si smette di scrivere:
  useEffect(() => {
    if (debounceDestination) {
      handleFilterItems(data, debounceDestination, "destination");
    } else {
      // cancellato tutto dall'input la lista scompare:
      setSuggestions((prev) => ({ ...prev, destination: [] }));
    }
  }, [data, debounceDestination]);

  if (isLoading && load) return <p>Loading...</p>;
  if (error && err) return <p>Something has occurred...</p>;

  // funzione filter passata allo useEffect in modo da poter utilizzare il debounce:
  const handleFilterItems = (
    data: Airport[],
    query: string,
    type: "origin" | "destination"
  ) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
      return;
    }

    const filteredElements = data.filter(
      (values: Airport) =>
        values.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        values.country.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        values.code.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
    setSuggestions((prev) => ({ ...prev, [type]: filteredElements }));
  };

  const handleClickFromList = (
    e: React.MouseEvent<HTMLUListElement>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setTravel: React.Dispatch<React.SetStateAction<string>>,
    type: "origin" | "destination"
  ) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      const code = searchItem?.split(" ").pop();
      console.log("clicked: ", searchItem);
      setSearch(searchItem || "");
      setTravel(code || "");
      // smoother clearing dei campi:
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "origin" | "destination"
  ) => {
    const value = e.target.value;
    if (type === "origin") {
      setOriginSearch(value);
    } else {
      setDestinationSearch(value);
    }
  };

  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={(e) => handleInputChange(e, "origin")}
          value={originSearch}
          airportData={suggestions.origin}
          onClick={(e) =>
            handleClickFromList(e, setOriginSearch, setOrigin, "origin")
          }
          onKeyDown={(e) =>
            handleKeyEvent(
              e,
              suggestions.origin,
              setOriginSearch,
              setOrigin,
              setSuggestions,
              "origin"
            )
          }
        />
        <AirportInput
          placeholder="Enter arrival airport"
          text="To:"
          onChange={(e) => handleInputChange(e, "destination")}
          value={destinationSearch}
          airportData={suggestions.destination}
          onClick={(e) =>
            handleClickFromList(
              e,
              setDestinationSearch,
              setDestination,
              "destination"
            )
          }
          onKeyDown={(e) =>
            handleKeyEvent(
              e,
              suggestions.destination,
              setDestinationSearch,
              setDestination,
              setSuggestions,
              "destination"
            )
          }
        />
      </form>
    </div>
  );
}

export default AirportForm;
