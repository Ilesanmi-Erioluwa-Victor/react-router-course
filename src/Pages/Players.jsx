import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  return <div>Players</div>;
};

export default Players;
