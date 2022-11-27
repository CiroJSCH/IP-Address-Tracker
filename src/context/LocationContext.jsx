import { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {

  const [ip, setIp] = useState("");

  return (
    <LocationContext.Provider
      value={{
        ip,
        setIp,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
