import { React, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
