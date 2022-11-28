// Libraries
import { createContext, useState } from "react";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {

  const [ip, setIp] = useState("");
  const [information, setInformation] = useState({});
  const [error, setError] = useState(false);

  return (
    <LocationContext.Provider
      value={{
        ip,
        setIp,
        information,
        setInformation,
        error,
        setError,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
