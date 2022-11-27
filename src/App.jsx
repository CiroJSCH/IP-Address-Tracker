// Components
import Searcher from "./components/Searcher";
import Result from "./components/Result";
import Map from "./components/Map";

// Context
import CartContextProvider from "./context/LocationContext";

// Styles
import "./styles/reset.css";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <Searcher />
        <Result />
        <Map />
      </CartContextProvider>
    </div>
  );
};

export default App;
