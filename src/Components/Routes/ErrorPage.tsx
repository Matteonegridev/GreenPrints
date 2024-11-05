import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>404 Page not found</h2>
      <p>
        Go back to{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
    </div>
  );
}

export default ErrorPage;
