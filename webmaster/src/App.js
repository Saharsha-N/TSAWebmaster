import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
    </Router>
  );
}

export default App;
