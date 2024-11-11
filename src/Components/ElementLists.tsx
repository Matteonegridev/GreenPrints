import { useState } from "react";

type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
  selectedItem: number;
};

function ElementLists({ filteredElements, selectedItem }: ListProps) {
  const [hoveredItem, setHoveredItem] = useState<number>(-1);
  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li
            className={`py-2 cursor-pointer ${
              selectedItem === i || hoveredItem === i
                ? "bg-green-600 text-white"
                : ""
            }`}
            key={i}
            onMouseEnter={() => setHoveredItem(i)}
            onMouseLeave={() => setHoveredItem(-1)}
          >
            {item.country} - {item.name} {item.code}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
