import { useState } from "react";
import { createContext } from "react";

const CustomerContext = createContext();
export default CustomerContext;

export function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState({ name: "", artistId: undefined });
  const [listOfAllArtists, setList] = useState([]);

  return (
    <CustomerContext.Provider
      value={{ customer, setCustomer, listOfAllArtists, setList }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
