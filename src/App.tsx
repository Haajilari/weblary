import { Fragment } from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import { Header } from "./Containers/Layout";
import Home from "./Routes/Home";
import { Container } from "@mui/system";
import { BrowserRouter, Outlet, Route, Router, Routes, useLocation } from "react-router-dom";
import VComponent from "./Routes/VComponent";

function App() {
  // let location = useLocation();
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg">
          <BrowserRouter>
            <Routes>
              <Route element={<Outlet />}>
                <Route path="/home" element={<Home />} />
                <Route path="/VComponent" element={<VComponent />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
