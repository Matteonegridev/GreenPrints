import { useEffect, useState } from "react";
import { type Airport } from "../Hooks/useAirportData";
import useAirportData from "../Hooks/useAirportData";
import useClimateData from "../Hooks/useClimateData";
import AirportInput from "./AirportInput";
import { useDebounce } from "use-debounce";
import SelectPassenger from "./SelectPassenger";
import { handleCode, resetInputs } from "../Utils/Functions";
import Result from "./Result";
import { useTranslation } from "react-i18next";

function AirportForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  // Stato per il suggerimento per l'autocompletamento:
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
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  // calcola se i field non sono vuoti:
  const fieldNotEmpty =
    originSearch.trim() !== "" &&
    destinationSearch.trim() !== "" &&
    passengers > 0;

  const { data, isLoading, error } = useAirportData();
  const {
    isLoading: load,
    error: err,
    data: climateData,
  } = useClimateData(origin, destination, passengers);

  const totalFootprint = (climateData?.footprint / 1000) * passengers;
  const { t } = useTranslation("form");

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
    type: "origin" | "destination",
  ) => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
      return;
    }

    // Filtra tra i dati by nome, paese e code aeroporto:
    const filteredElements = data.filter(
      (values: Airport) =>
        values.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        values.country.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        values.code.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        values.city?.toLowerCase().includes(trimmedQuery.toLowerCase()),
    );
    setSuggestions((prev) => ({ ...prev, [type]: filteredElements }));
  };

  const handleClickFromList = (
    e: React.MouseEvent<HTMLUListElement>,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    type: "origin" | "destination",
  ) => {
    const li = (e.target as HTMLElement).closest("li");
    if (li) {
      const searchItem = li.textContent;
      console.log("clicked: ", searchItem);
      // inserisce il valore nel campo di ricerca:
      setSearch(searchItem || "");
      // smoother clearing dei campi:
      setSuggestions((prev) => ({ ...prev, [type]: [] }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "origin" | "destination",
  ) => {
    const value = e.target.value;
    if (type === "origin") {
      setOriginSearch(value);
    } else {
      setDestinationSearch(value);
    }
  };

  return (
    <>
      <main className="w-full p-4">
        <div className="p-2 sm:pt-28 md:w-full lg:pt-4">
          <h1 className="font-subHeadings text-center text-3xl font-bold uppercase md:w-full md:pt-10 md:text-4xl dark:text-white">
            {t("formTitle")}
          </h1>
        </div>
        <section className="m-auto mt-12 flex min-h-[50dvh] flex-col gap-5 bg-white p-4 shadow-md md:w-[80%] md:gap-8 xl:p-7 dark:bg-clearDark dark:text-white">
          <AirportInput
            placeholder={t("placeholderOrigin")}
            text={t("from")}
            value={originSearch}
            airportData={suggestions.origin}
            setSearch={setOriginSearch}
            setSuggestions={setSuggestions}
            type="origin"
            onChange={(e) => handleInputChange(e, "origin")}
            onClick={(e) => handleClickFromList(e, setOriginSearch, "origin")}
          />
          <AirportInput
            placeholder={t("placeholderDestination")}
            text={t("to")}
            value={destinationSearch}
            airportData={suggestions.destination}
            setSearch={setDestinationSearch}
            setSuggestions={setSuggestions}
            type="destination"
            onChange={(e) => handleInputChange(e, "destination")}
            onClick={(e) =>
              handleClickFromList(e, setDestinationSearch, "destination")
            }
          />
          <SelectPassenger
            text={t("passengers")}
            passengers={passengers}
            setPassengers={setPassengers}
          />
          <div className="flex flex-col gap-2 pb-4 pt-4 md:pt-10 xl:flex-row xl:gap-6">
            <button
              className="w-full rounded-sm bg-primary px-8 py-2 text-base font-medium text-white xl:py-4 xl:text-2xl"
              id="calculate"
              disabled={isCalculated || !fieldNotEmpty}
              onClick={(e) =>
                handleCode(
                  setDestination,
                  setOrigin,
                  e,
                  originSearch,
                  destinationSearch,
                  isCalculated,
                  setIsCalculated,
                )
              }
            >
              {t("buttonCalculate")}
            </button>
            <button
              className="w-full rounded-sm bg-tertiary px-8 py-2 text-base font-medium text-white xl:py-4 xl:text-2xl"
              id="reset"
              onClick={() =>
                resetInputs(
                  setSuggestions,
                  setOriginSearch,
                  setDestinationSearch,
                  setIsCalculated,
                  setPassengers,
                )
              }
            >
              {t("buttonReset")}
            </button>
          </div>
          {isCalculated && (
            <>
              <Result
                isCalculated={isCalculated}
                totalFootprint={totalFootprint}
              />
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default AirportForm;
