import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "../components/TeamLogo";

function useTeamPageData(teamId) {
  const { response: teamNames, loading: loadingTeamNames } = useTeamNames();

  const { loading: loadingTeamArticles, response: articles } =
    useTeamArticles(teamId);

  const { response: team, loadingTeam } = useTeam(teamId);

  return {
    teamNames,
    team,
    loading: loadingTeam || loadingTeamArticles || loadingTeamNames,
    articles,
  };
}

const Team = () => {
  const { teamId } = useParams();

  const { teamNames, team, loading, articles } = useTeamPageData(teamId);

  console.log({ team });

  if (loading === true) {
    return <p>Loading....</p>;
  }

  if (!team) {
    return (
      <p>Please refresh your browser or check your Internet settings...</p>
    );
  }

  if (!teamNames.includes(teamId)) {
    return (
      <h1 className="text-center"> The {teamId} is not a valid Team...</h1>
    );
  }

  const { name: teamName } = team;

  return (
    <div className="panel">
      <TeamLogo id={teamId} />
      <h1 className="medium-header">{teamName}</h1>
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: "/players", search: `?teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>

      <ul className="championships">
        {team.championships.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
