
import React, {Suspense}  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
const Home = React.lazy( () => import("../Pages/Home")) ;
const Teams  = React.lazy(() => import("../Pages/Teams"));
const Players = React.lazy( () => import ("../Pages/Players")) ;
const TeamPage  = React.lazy(() =>import ("../Pages/TeamPage"));
const Team  = React.lazy(() => import ("../components/Team"));
const Player  = React.lazy(() => import ("./Player"));
const Articles  "../Pages/Articles";
const Article  "./Article";

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
