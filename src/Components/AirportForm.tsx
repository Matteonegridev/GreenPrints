import AirportInput from "./AirportInput";

type Props = {};

function AirportForm({}: Props) {
  const handleClickFromList = () => {};
  const handleChangeList = () => {};
  return (
    <div>
      <form action="">
        <AirportInput
          placeholder="Enter departure airport"
          text="From:"
          onChange={}
          value={}
          suggestions={}
          onClick={}
        />
      </form>
    </div>
  );
}

export default AirportForm;
