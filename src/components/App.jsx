import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Navbar from "./Navbar";
import { Loading } from "./Loading";
const Home = React.lazy(() => import("../Pages/Home"));
const Teams = React.lazy(() => import("../Pages/Teams"));
const Players = React.lazy(() => import("../Pages/Players"));
const TeamPage = React.lazy(() => import("../Pages/TeamPage"));
const Team = React.lazy(() => import("../components/Team"));
const Player = React.lazy(() => import("./Player"));
const Articles = React.lazy(() => import("../Pages/Articles"));
const Article = React.lazy(() => import("./Article"));

function Routers() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/players",
      element: <Players />,
      children: [
        { path: ":playerId", element: <Player /> },
        {
          path: "",
          element: (
            <div className="sidebar-instruction">Please, select a Player</div>
          ),
        
        },
      ],
    },
  ]);
}

export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Navbar />

          <Routes>

    
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
                  <div className="sidebar-instruction">
                    Please, select a Team
                  </div>
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
        </Suspense>
      </div>
    </Router>
  );
}
