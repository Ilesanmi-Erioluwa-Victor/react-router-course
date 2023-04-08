import React from "react";
import { Link } from "react-router-dom";

import TeamLogo from "../components/TeamLogo";
import useTeamNames from "../hooks/useTeamNames";

const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return null;
  }
    return <div className="container">
        <h1 className="large-header">
            Hash History Basketball League
        </h1>
        
        <h3 className="header text-center">
            Select a team.
        </h3>
  </div>;
};

export default Home;
