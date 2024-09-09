import { createContext, useState } from "react";
export let DarkModeContext = createContext("");
// eslint-disable-next-line react/prop-types
function DarkModeContextProvider({ children }) {
  let [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export default DarkModeContextProvider;
