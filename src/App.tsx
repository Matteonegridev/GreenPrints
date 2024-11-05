import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/Routes/RootLayout";
import ErrorPage from "./Components/Routes/ErrorPage";
import AirportForm from "./Components/AirportForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "index",
          element: <AirportForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
