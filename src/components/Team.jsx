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
        <div style={{ width: "100%" }}>
            <TeamLogo id={team.id} className="center" />
            <h1 className="medium-header">{team.name}</h1>
            
      </div>
  </div>;
};

export default Team;
