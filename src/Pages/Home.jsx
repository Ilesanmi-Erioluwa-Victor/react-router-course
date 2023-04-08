import React from "react";
import { Link } from "react-router-dom";

import TeamLogo from "../components/TeamLogo";
import useTeamNames from "../hooks/useTeamNames";

const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return null;
  }
  return <div>Home</div>;
};

export default Home;
