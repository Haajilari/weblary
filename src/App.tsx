import { Fragment } from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import { Header } from "./Containers/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Routes/Home";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Router>
          <Route path="/">
            <Home />
          </Route>
        </Router>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
