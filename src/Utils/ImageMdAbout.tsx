function ImageMdAbout() {
  return (
    <div className="md:w-full hidden md:block xl:grid ">
      <figure className="p-3 xl:place-items-center 2xl:w-[50%] 2xl:place-self-end cursor-pointer 2xl:hover:scale-105 transition-all duration-300 ease-in ">
        <img
          src="../assets/img/wind.jpg"
          alt="wind mill on sunset"
          className="rounded-xl shadow-xl 2xl:hover:shadow-md transition-all duration-300 ease-in"
        />
      </figure>
    </div>
  );
}

export default ImageMdAbout;
