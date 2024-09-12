import { createContext, useState } from "react";
export let SideBarToggleContext = createContext("");
// eslint-disable-next-line react/prop-types
export default function SideBarToggleContextProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <SideBarToggleContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      {children}
    </SideBarToggleContext.Provider>
  );
}
