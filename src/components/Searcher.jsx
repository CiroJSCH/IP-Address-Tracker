// Libraries
import { useContext, useRef } from "react";
import { LocationContext } from "../context/LocationContext";

// Styles
import "../styles/searcher.css";

const Searcher = () => {

  const { setIp } = useContext(LocationContext);
  const ipInput = useRef("");

  const ipHandler = () => {
    setIp(ipInput.current.value);
  }

  return (
    <div className="searcher">
      <h1>IP Address Tracker</h1>
      <div className="search">
        <div className="search__input">
          <input type="text" name="ip" placeholder="Search for any IP address or domain" ref={ipInput}/>
        </div>
        <div className="search__button" onClick={ipHandler}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
