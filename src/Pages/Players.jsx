import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");
  
  return <div>Players</div>;
};

export default Players;
