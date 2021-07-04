import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Lists from "./components/Tables/Lists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/list-products" exact>
            <Lists />
          </Route>
          <Route path="/list-categories" exact>
            <Lists />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
