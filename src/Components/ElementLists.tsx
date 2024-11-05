type ListProps = {
  filteredElements: { name: string; country: string; code: string }[];
};

function ElementLists({ filteredElements }: ListProps) {
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
