import { useEffect, useState } from "react";
import { Airport } from "../Hooks/useAirportData"; // Assuming Airport type is imported

// Custom hook for handling key events
const useKeyEvent = (
  suggestions: Airport[],
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setSuggestions: React.Dispatch<
    React.SetStateAction<{ origin: Airport[]; destination: Airport[] }>
  >,
  type: "origin" | "destination",
  value: string
) => {
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [isListActive, setIsListActive] = useState<boolean>(false);

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLElement>) => {
    const totalSuggestions = suggestions.length;

    switch (e.key) {
      case "ArrowDown":
        if (totalSuggestions > 0) {
          setSelectedItem((prev) => (prev + 1) % totalSuggestions);
        }
        break;

      case "ArrowUp":
        if (selectedItem > 0) {
          setSelectedItem(
            (prev) => (prev - 1 + totalSuggestions) % totalSuggestions
          );
        }
        break;

      case "Enter":
        if (selectedItem >= 0) {
          e.preventDefault();
          const selectedAirport = suggestions[selectedItem];
          const searchItem = `${selectedAirport.country} - ${selectedAirport.name} ${selectedAirport.code}`;
          setSearch(searchItem);
          setSelectedItem(-1);
          setSuggestions((prev) => ({ ...prev, [type]: [] }));
          setIsListActive(false);
        }
        break;

      case "Escape":
        setSelectedItem(-1);
        setIsListActive(false);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setIsListActive(suggestions.length > 0 && value.trim().length > 0);
  }, [value, suggestions, setIsListActive]);

  return { selectedItem, handleKeyEvent, isListActive };
};

export default useKeyEvent;
