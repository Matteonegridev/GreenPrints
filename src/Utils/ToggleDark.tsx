import { useEffect, useState } from "react";

const initialState = () => {
  const dark = sessionStorage.getItem("darkMode");
  return dark ? JSON.parse(dark) : false;
};

function ToggleDark() {
  const [isDark, setIsDark] = useState(initialState);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    sessionStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <button onClick={toggleDark}>{isDark ? "Sun" : "Moon"}</button>
    </>
  );
}

export default ToggleDark;
