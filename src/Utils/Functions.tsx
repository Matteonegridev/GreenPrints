import { Airport } from "../Hooks/useAirportData";

export const handleCode = (
  setDestination: React.Dispatch<React.SetStateAction<string>>,
  setOrigin: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLButtonElement>,
  destinationSearch: string,
  originSearch: string,
  isCalculated: boolean | undefined,
  setIsCalculated: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();
  const toCode = destinationSearch?.split(" ").pop();
  const fromCode = originSearch?.split(" ").pop();
  setDestination(toCode || "");
  setOrigin(fromCode || "");
  if (!isCalculated) setIsCalculated(true);
};

export const resetInputs = (
  setSuggestions: React.Dispatch<
    React.SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >,
  setOriginSearch: React.Dispatch<React.SetStateAction<string>>,
  setDestinationSearch: React.Dispatch<React.SetStateAction<string>>,
  setIsCalculated: React.Dispatch<React.SetStateAction<boolean>>,
  setPassengers: React.Dispatch<React.SetStateAction<number>>
) => {
  setSuggestions((prev) => ({ ...prev, origin: [], destination: [] }));
  setOriginSearch("");
  setDestinationSearch("");
  setIsCalculated(false);
  setPassengers(1);
};
