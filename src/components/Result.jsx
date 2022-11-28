// Libraries
import { useContext } from "react";

// Context
import { LocationContext } from "../context/LocationContext";

// Styles
import "../styles/result.css";

const Result = () => {
  const { information, error } = useContext(LocationContext);

  return (
    <>
      {Object.keys(information).length !== 0 && (
        <div className="result">
          {error ? (
            <h1 className="error">IP or Domain NOT FOUND</h1>
          ) : (
            <>
              <div className="result__item">
                <p>IP ADDRESS</p>
                <span>{information.ip}</span>
              </div>
              <div className="result__item">
                <p>LOCATION</p>
                <span>
                  {information.location.city}, {information.location.country}
                </span>
              </div>
              <div className="result__item">
                <p>TIMEZONE</p>
                <span>UTC {information.location.timezone}</span>
              </div>
              <div className="result__item">
                <p>ISP</p>
                <span>{information.isp}</span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Result;
