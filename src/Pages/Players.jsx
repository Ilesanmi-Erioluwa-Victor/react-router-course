import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");

  const {
    response: names,
    loading
  } = usePlayerNames

  return <div className="container">Players for team {team}</div>;
};

export default Players;
