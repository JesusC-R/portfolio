import { useEffect, useState } from "react";

const useThemeHook = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const userPreference = window.localStorage.getItem("theme");

  const getInitialMode = () => {
    if (userPreference) {
      return userPreference;
    } else if (window.matchMedia(preferDarkQuery).matches) {
      return "dark";
    } else {
      return "light";
    }
  };

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const newMode = mediaQuery.matches ? "dark" : "light";
      setMode(newMode);
      window.localStorage.setItem("theme", newMode);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeHook;
