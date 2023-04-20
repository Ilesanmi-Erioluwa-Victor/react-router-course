import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Teams from "../Pages/Teams";
import Players from "../Pages/Players";
import TeamPage from "../Pages/TeamPage";
import Team from "../components/Team";
import Player from "./Player";
import Articles from "../Pages/Articles";
import Article from "./Article";

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
          >
            <Route
              path=""
              element={
                <div className="sidebar-instruction">
                  Please, select a Player
                </div>
              }
            />
            <Route
              path=":playerId"
              element={<Player />}
            />
          </Route>

          <Route
            path="/teams"
            element={<Teams />}
          >
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Please, select a Team</div>
              }
            />

            <Route
              path=":teamId"
              element={<Team />}
            />
          </Route>

          <Route
            path="/:teamId"
            element={<TeamPage />}
          />

          <Route
            path=":teamId/articles"
            element={<Articles />}
          >
            <Route
              path=""
              element={
                <div className="sidebar-instruction">
                  Please, select a Article
                </div>
              }
            />
            <Route
              path=":articleId"
              element={<Article />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
