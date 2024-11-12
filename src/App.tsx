import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/Routes/RootLayout";
import ErrorPage from "./Components/Routes/ErrorPage";
import AirportForm from "./Components/AirportForm";
import MainPage from "./Components/Routes/MainPage";
import Faq from "./Components/Routes/Faq";
import About from "./Components/Routes/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "calculator",
          element: <AirportForm />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
