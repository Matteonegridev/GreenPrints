import useAirportData from "../Hooks/useAirportData";
import AirportInput from "./AirportInput";

function AirportForm() {
  const { data: airport } = useAirportData;

  const handleClickFromList = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "LI") {
      console.log("clicked on: ", target.textContent);
    }
  };
  const handleChangeList = (e) => {};
  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={}
          value={}
          suggestions={}
          onClick={handleClickFromList}
        />
      </form>
    </div>
  );
}

export default AirportForm;
