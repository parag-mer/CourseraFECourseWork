import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataProvider } from "./provider/DataProvider";
import { MyList } from "./components/MyList";
import { About } from "./components/About";
import { Routes, Route, Link } from "react-router-dom";
import { Player } from "./components/Player";
import { Calculator } from "./components/Calculator";
import { TodoSwap } from "./components/TodoSwap";
import { Form } from "./components/Form";
import { FetchDemo } from "./components/FetchDemo";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/player" className="nav-link">
                Player
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calculator" className="nav-link">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todoSwap" className="nav-link">
                Todo Swap
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fetchDemo" className="nav-link">
                Fetch Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <DataProvider>
        <Routes>
          <Route path="/" element={<MyList />} />
          <Route path="/player" element={<Player />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todoSwap" element={<TodoSwap />} />
          <Route path="/form" element={<Form />} />
          <Route path="/fetchDemo" element={<FetchDemo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
