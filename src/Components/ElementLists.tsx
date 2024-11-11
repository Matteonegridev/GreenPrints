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
          <li className="p-2 cursor-pointer  text-sm" key={i}>
            {item.country} - {item.name} {item.code}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
