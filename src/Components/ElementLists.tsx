type ListProps = {
  filteredElements: { name: string; city: string; code: string }[];
};

function ElementLists({ filteredElements }: ListProps) {
  console.log("Filtered Elements in Parent:", filteredElements);
  return (
    <>
      {filteredElements.length > 0 &&
        filteredElements.map((item, i) => (
          <li className="p-2 cursor-pointer  text-sm" key={i}>
            {item.city} - {item.name} {item.code}
          </li>
        ))}
    </>
  );
}

export default ElementLists;
