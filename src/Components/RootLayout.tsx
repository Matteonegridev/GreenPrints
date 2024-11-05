import { Outlet } from "react-router-dom";

type Props = {};

function RootLayout({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
