import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "../components/TeamLogo";
import { slugify } from "../Utils/Slugify";

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

const TeamPage = () => {
  const { teamId } = useParams();

  const { teamNames, team, loading, articles } = useTeamPageData(teamId);

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

      <h4>Championships</h4>

      <ul className="championships">
        {team.championships.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>

      <ul
        className="info-list row"
        style={{ width: "100%" }}
      >
        <li>
          Est. <div>{team.established.toUpperCase}</div>
        </li>

        <li>
          Manager <div>{team.manager.toUpperCase}</div>
        </li>
        <li>
          Coach <div>{team.coach.toUpperCase}</div>
        </li>

        <li>
          Records{" "}
          <div>
            {team.wins} - {team.losses}
          </div>
        </li>
      </ul>

      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <h4 className="article-title">
                <Link to={`articles/${slugify(article.title)}`}>
                  {article.title}
                </Link>
              </h4>

              <div className="article-date">
                {new Date(article.date).toLocaleDateString()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamPage;
