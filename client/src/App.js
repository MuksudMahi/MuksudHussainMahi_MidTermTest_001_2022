import logo from "./logo.svg";
import "./App.css";
import { AddAppointment, ListAppointments } from "./pages";
import { NavBar } from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ListAppointments />}></Route>
          <Route exact path="/add" element={<AddAppointment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
