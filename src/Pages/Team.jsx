import React from "react";
import { useParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "../components/TeamLogo";

function useTeamPageData(teamId) {
  const { response: teamNames, loading: loadingTeamNames } = useTeamNames();

  const { loading : loadingTeamArticles, response : articles} = useTeamArticles(teamId);

  const { response: team, loadingTeam } = useTeam(teamId);
  
  return {
    teamNames,
    team,
    loading,
    articles
  }
}

const Team = () => {
  const { teamId } = useParams();
  return <div>Team Page for {teamId}</div>;
};

export default Team;
