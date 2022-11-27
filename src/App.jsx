// Components
import Searcher from "./components/Searcher";
import Result from "./components/Result";

// Styles
import "./styles/reset.css";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="App">
      <Searcher />
      <Result />
    </div>
  )
}

export default App;
