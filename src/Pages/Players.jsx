import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";


function Sidebar() { 
  
}


const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");

  const { response: names, loading } = usePlayerNames(team);

  if (loading === true) {
    return null;
  }

  console.log({names})
  return <div className="container">Players for team {team}</div>;
};

export default Players;
