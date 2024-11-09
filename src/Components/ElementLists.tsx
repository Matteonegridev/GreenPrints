import useKeyEvent from "../Hooks/useKeyEvent";

type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
};

function ElementLists({ filteredElements }: ListProps) {
  const { selectedItem } = useKeyEvent();
  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li
            className={`p-2 cursor-pointer text-sm hover:bg-green-500 ${
              selectedItem === i
                ? "bg-green-500 text-white"
                : "hover:bg-green-500"
            }`}
            key={i}
          >
            {item.country} - {item.name} {item.code}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
