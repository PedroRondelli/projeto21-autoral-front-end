import { useState } from "react";
import { createContext } from "react";

const CustomerContext = createContext();
export default CustomerContext;

export function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState({});

  return (
    <CustomerContext.Provider
      value={{ customer,setCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
}