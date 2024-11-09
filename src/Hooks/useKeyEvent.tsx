// keyboard events:
import { SetStateAction, useState } from "react";
import { type Airport } from "../Hooks/useAirportData";

const useKeyEvent = () => {
  const [selectedItem, setSelectedItem] = useState<number>(-1);

  const handleKeyEvent = (
    e: React.KeyboardEvent<HTMLElement>,
    suggestions: Airport[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setTravel: React.Dispatch<React.SetStateAction<string>>,
    setSuggestions: React.Dispatch<
      SetStateAction<{ origin: Airport[]; destination: Airport[] }>
    >,
    type: "origin" | "destination"
  ) => {
    const totalSuggestions = suggestions.length;

    switch (e.key) {
      case "ArrowDown":
        if (totalSuggestions > 0) {
          setSelectedItem((prev) => (prev + 1) % totalSuggestions);
          console.log(
            "Arrow down, index:",
            (selectedItem + 1) % totalSuggestions
          );
        }
        break;

      case "ArrowUp":
        if (selectedItem > 0) {
          setSelectedItem(
            (prev) => (prev - 1 + totalSuggestions) % totalSuggestions
          );
          console.log(
            "Arrow up , index:",
            (selectedItem - 1) % totalSuggestions
          );
        }
        break;

      case "Enter":
        if (selectedItem >= 0) {
          e.preventDefault();
          const selectedAirport = suggestions[selectedItem];
          const code = selectedAirport.code;
          const searchItem = `${selectedAirport.country} - ${selectedAirport.name} ${selectedAirport.code}`;

          setSearch(searchItem);
          setTravel(code);

          setSelectedItem(-1); // Deselect after pressing Enter
          setSuggestions((prev) => ({ ...prev, [type]: [] })); // Clear suggestions
        }
        break;

      case "Escape":
        setSelectedItem(-1);
        console.log("Escape pressed, deselected item.");
        break;

      default:
        break;
    }
  };

  return { handleKeyEvent, selectedItem };
};

export default useKeyEvent;
