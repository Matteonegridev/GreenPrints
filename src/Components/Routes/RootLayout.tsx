import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LangSwitch from "../../Utils/LangSwitch";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <LangSwitch />
    </>
  );
}

export default RootLayout;
