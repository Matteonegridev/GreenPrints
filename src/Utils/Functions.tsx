import { Airport } from "../Hooks/useAirportData";

const findCode = (word: string) => {
  const regex = /\b[A-Z]{3}\b/;
  const code = word.match(regex); // ritorna un array
  return code?.[0];
};

export const handleCode = (
  setDestination: React.Dispatch<React.SetStateAction<string>>,
  setOrigin: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLButtonElement>,
  destinationSearch: string,
  originSearch: string,
  isCalculated: boolean | undefined,
  setIsCalculated: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  e.preventDefault();
  const toCode = findCode(destinationSearch);
  const fromCode = findCode(originSearch);
  setDestination(toCode || "");
  setOrigin(fromCode || "");
  if (!isCalculated) {
    setTimeout(() => {
      setIsCalculated(true);
    }, 1000);
  }
  console.log(fromCode, toCode);
};

export const resetInputs = (
  setSuggestions: React.Dispatch<
    React.SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >,
  setOriginSearch: React.Dispatch<React.SetStateAction<string>>,
  setDestinationSearch: React.Dispatch<React.SetStateAction<string>>,
  setIsCalculated: React.Dispatch<React.SetStateAction<boolean>>,
  setPassengers: React.Dispatch<React.SetStateAction<number>>,
) => {
  setSuggestions((prev) => ({ ...prev, origin: [], destination: [] }));
  setOriginSearch("");
  setDestinationSearch("");
  setIsCalculated(false);
  setPassengers(1);
};
