import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Converter from "./components/Converter";
import FiatConverter from "./components/FiatConverter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/converter">
          <Converter />
        </Route>
        <Route path="/fiat-converter">
          <FiatConverter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
