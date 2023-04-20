import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();

  const { loading, response: team } = useTeam(teamId);

    if (loading === true) {
        return null
    }
    return <div className="panel">
      {JSON.stringify(team, null, 2)}
  </div>;
};

export default Team;
