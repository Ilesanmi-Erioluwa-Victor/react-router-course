import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import useTeamNames from "../hooks/useTeamNames";

const Teams = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading === true) {
    return null;
  }

  return (
    <div className="container two-column">
      <Sidebar
        title={"Teams"}
        list={teamNames}
      />
      
      <Outlet />
    </div>
  );
};

export default Teams;
