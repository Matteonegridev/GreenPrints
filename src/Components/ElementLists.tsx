import { useState } from "react";

type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
  selectedItem: number;
};

function ElementLists({ filteredElements, selectedItem }: ListProps) {
  const [hovered, setHovered] = useState(-1);

  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li
            className={`p-2 cursor-pointer text-base border-b  border-dark ${
              selectedItem === i || hovered === i
                ? "bg-secondary text-white rounded-sm"
                : ""
            }`}
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            {item.name} {item.code} - {item.country}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
