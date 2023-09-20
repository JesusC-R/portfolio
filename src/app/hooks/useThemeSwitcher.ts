import { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState<string>(() => {
    // Initialize mode based on user preference in localStorage or the media query
    const userPreference = window.localStorage.getItem("theme");
    return userPreference || (window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const userPreference = window.localStorage.getItem("theme");
      const check = userPreference || (mediaQuery.matches ? "dark" : "light");
      setMode(check);

      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Store the current theme preference in localStorage
    window.localStorage.setItem("theme", mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
