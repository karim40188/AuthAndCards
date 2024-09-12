import axios from "axios";
import { createContext, useState } from "react";

import {
  AiOutlineMessage,
  AiOutlineFileSearch,
  AiOutlineDollarCircle,
  AiOutlineFileDone,
} from "react-icons/ai";
export let StatusContext = createContext("");
// eslint-disable-next-line react/prop-types
export default function StatusContextProvider({ children }) {
  const [status] = useState([
    {
      count: "20",
      title: "Chats",
      color: "#00796B",
      hoverColor: "#004D40",
      Icon: AiOutlineMessage,
    },
    {
      count: "20",
      title: "Requests",
      color: "#F57F17",
      hoverColor: "#C6A700",
      Icon: AiOutlineFileSearch,
    },
    {
      count: "20",
      title: "Offer Price",
      color: "#2E7D32",
      hoverColor: "#1B5E20",
      Icon: AiOutlineDollarCircle,
    },
    {
      count: "0",
      title: "Bills",
      color: "#D32F2F",
      hoverColor: "#B71C1C",
      Icon: AiOutlineFileDone,
    },
  ]);

  const fetchCarImages = async () => {
    const API_KEY = "WGAWz3uUlyqsSzFAZkRUk2jD7I1socyDzB410yWSTELky3aq035wiZVx";
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: "cars",
        per_page: 100,
      },
      headers: {
        Authorization: API_KEY,
      },
    });
    return response;
  };

  return (
    <StatusContext.Provider value={{ status, fetchCarImages }}>
      {children}
    </StatusContext.Provider>
  );
}
