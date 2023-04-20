import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();

  const { loading, response: team } = useTeam(teamId);

  if (loading === true) {
    return null;
  }
  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo
          id={team.id}
          className="center"
        />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est. <div>{team.established.toUpperCase}</div>
          </li>

          <li>
            Manager <div>{team.manager.toUpperCase}</div>
          </li>
          <li>
            Coach <div>{team.coach.toUpperCase}</div>
          </li>
        </ul>
        <Link
          to={`/${teamId}`}
          className="center btn-main"
        >
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
};

export default Team;
