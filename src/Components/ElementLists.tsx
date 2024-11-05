type ListProps = {
  filteredElements: { name: string; city: string; code: string }[];
};

function ElementLists({ filteredElements }: ListProps) {
  return (
    {filteredElements.map((item, i) => (
        <li className="p-2 cursor-pointer  text-sm" key={i}>{item.name} - {item.city} {item.code}</li>
    ))}
  );
}

export default ElementLists;
