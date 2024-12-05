import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="grid h-screen place-content-center">
      <div className="text-center [&>*]:pt-3">
        <h2 className="mb-2 font-headings font-bold sm:text-5xl lg:text-8xl 2xl:text-9xl dark:text-white">
          Oops!
        </h2>
        <p className="text-gray-600 md:text-xl 2xl:text-xl dark:text-gray-400">
          We couldn't find the page you were looking for
        </p>
        <p className="block text-xl text-secondary">
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </section>
  );
}

export default ErrorPage;
