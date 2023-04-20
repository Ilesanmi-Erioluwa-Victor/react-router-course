import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();
  return <div></div>;
};

export default Team;
