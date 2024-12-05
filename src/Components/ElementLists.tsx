import { useEffect, useRef, useState } from "react";

type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
  selectedItem: number;
};

function ElementLists({ filteredElements, selectedItem }: ListProps) {
  const [hovered, setHovered] = useState(-1);
  const selectRef = useRef<(HTMLLIElement | null)[]>([]);

  //scroll nearest li element so I can navigate thru the list:
  useEffect(() => {
    if (selectRef.current[selectedItem]) {
      selectRef.current[selectedItem]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedItem]);

  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li
            ref={(el) => (selectRef.current[i] = el)}
            className={`p-2 cursor-pointer text-base border-b  border-dark xl:text-xl xl:py-3 ${
              selectedItem === i || hovered === i
                ? "bg-secondary text-white rounded-sm"
                : ""
            }`}
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
