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

    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          path: "",
          element: (
            <div className="sidebar-instruction">Please, select a Team</div>
          ),
        },
        { path: ":teamId", element: <Team /> },
      ],
    },

    {
      path: "/:teamId",
      element: <TeamPage />,
    },

    {
      path: ":teamId/articles",
      element: <Articles />,
      children: [
        {
          path: "",
          element: (
            <div className="sidebar-instruction">Please, select a Article</div>
          ),
        },

        {
          path: ":articleId",
          element: <Article />,
        },
      ],
    },

    {path : "*" , element : <div>Error 404, Page not found..</div>}
  ]);
}

export default function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routers />
        </Suspense>
      </div>
    </Router>
  );
}
