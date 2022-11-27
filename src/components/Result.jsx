import "../styles/result.css";

const Result = () => {
  return (
    <div className="result">
      <div className="result__item">
        <p>IP ADDRESS</p>
        <span>192.212.174.101</span>
      </div>
      <div className="result__item">
        <p>LOCATION</p>
        <span>Brooklyn, NY 10001</span>
      </div>
      <div className="result__item">
        <p>TIMEZONE</p>
        <span>UTC -05:00</span>
      </div>
      <div className="result__item">
        <p>ISP</p>
        <span>SpaceX Starlink</span>
      </div>
    </div>
  );
};

export default Result;
