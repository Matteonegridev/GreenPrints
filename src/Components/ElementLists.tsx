import { useState } from "react";

type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
  selectedItem: number;
};

function ElementLists({ filteredElements, selectedItem }: ListProps) {
  console.log("Selected Item: ", selectedItem);
  const [hovered, setHovered] = useState(-1);

  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li
            className="p-2 cursor-pointer text-sm"
            style={{
              backgroundColor:
                selectedItem === i || hovered === i ? "green" : "",
              color: selectedItem === i || hovered === i ? "white" : "",
            }}
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            {item.country} - {item.name} {item.code}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
