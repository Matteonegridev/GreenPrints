const infoUsers = [
  {
    id: 0,

    stat: "12,345+",
    small: "People informed about their carbon footprint",
  },
  {
    id: 1,

    stat: "150,000+ kg of CO₂",
    small: "Estimated CO₂ offset",
  },
  {
    id: 2,

    stat: "25,678+",
    small: "Flights analyzed for emissions",
  },
  {
    id: 3,

    stat: "70%",
    small: "Users considering greener travel",
  },
];

function InfoAbout() {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-6 md:place-items-center md:gap-6  ">
      {infoUsers.map((info) => (
        <div
          className=" md:w-[300px] md:min-h-[120px] bg-white dark:bg-clearDark shadow-lg rounded-lg p-2 flex flex-col gap-2 text-center  "
          key={info.id}
        >
          <p className="font-title text-primary text-xl dark:text-tertiary md:pt-1 ">
            {info.stat}
          </p>
          <small className="dark:text-white flex-grow-0 font-body  md:flex-grow text-clearDark md:leading-none md:place-content-center">
            {info.small}
          </small>
        </div>
      ))}
    </section>
  );
}

export default InfoAbout;
