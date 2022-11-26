import "../styles/searcher.css";

const Searcher = () => {
  return (
    <div className="searcher">
      <h1>IP Address Tracker</h1>
      <div className="search">
        <div className="search__input">
          <input type="text" name="ip" placeholder="Search for any IP address or domain"/>
        </div>
        <div className="search__button">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Searcher;
