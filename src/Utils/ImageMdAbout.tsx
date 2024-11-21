function ImageMdAbout() {
  return (
    <div className="md:w-full hidden md:block xl:grid ">
      <figure className="p-3 xl:place-items-center 2xl:w-[80%] 2xl:place-self-end cursor-pointer 2xl:hover:scale-105 transition-all duration-300 ease-in 2xl:-mt-20">
        <img
          src="../assets/img/planet-earth.png"
          alt="green planet earth"
          className="drop-shadow-lg transition-all duration-300 ease-in"
        />
      </figure>
    </div>
  );
}

export default ImageMdAbout;
