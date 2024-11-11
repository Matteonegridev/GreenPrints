import { useState } from "react";
import { Airport } from "./useAirportData";

function useKeyEvent(
  setCode: React.Dispatch<React.SetStateAction<string>>,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setSuggestion: React.Dispatch<
    React.SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >,
  suggestions: Airport[],
  type: "origin" | "destination"
) {
  const [selectedItem, setSelectedItem] = useState<number>(-1);

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLElement>) => {
    const totalSuggestions = suggestions.length;

    switch (e.key) {
      case "ArrowUp":
        if (selectedItem > 0) {
          setSelectedItem(
            (prev) => (prev - 1 + totalSuggestions) % totalSuggestions
          );
        }
        console.log("keyup detected");
        break;
      case "ArrowDown":
        if (totalSuggestions > 0) {
          setSelectedItem((prev) => (prev + 1) % totalSuggestions);
        }
        console.log("keydown detected");

        break;
      case "Enter":
        if (selectedItem >= 0) {
          e.preventDefault();
          const selectedAirport = suggestions[selectedItem];
          const code = selectedAirport.code;
          const searchItem = `${selectedAirport.country} - ${selectedAirport.name} ${selectedAirport.code}`;
          setCode(code);
          setSearch(searchItem);
          setSelectedItem(-1);
          setSuggestion((prev) => ({ ...prev, [type]: [] }));
        }

        break;
      case "Escape":
        // deselect on Esc:
        setSelectedItem(-1);
        break;

      default:
        break;
    }
  };
  return { handleKeyEvent, selectedItem };
}

export default useKeyEvent;
