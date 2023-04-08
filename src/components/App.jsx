import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Teams from "../Pages/Teams";
import Players from "../Pages/Players";
import Team from "../Pages/Team";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/players"
            element={<Players />}
          />

          <Route
            path="/teams"
            element={<Teams />}
          />

          <Route path="/:teamId" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}
