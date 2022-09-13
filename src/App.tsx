import { Fragment } from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import { Header } from "./Containers/Layout";
import Home from "./Routes/Home";
import { Container } from "@mui/system";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Home />
        </Container>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
