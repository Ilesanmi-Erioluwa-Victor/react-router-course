import React, { useEffect } from "react";
import { useLocation, useSearchParams, Outlet } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { Sidebar } from "../components/Sidebar";
import { Loading } from "../components/Loading";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [team, setTeam] = React.useState(searchParams.get("teamId"));

  useEffect(() => {
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    } else {
      setTeam(searchParams.get("teamId"));
    }
  }, [location.search, searchParams]);

  const { response: names, loading } = usePlayerNames(team);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <Sidebar
        title={"Players"}
        list={names}
      />

      <Outlet />
    </div>
  );
};

export default Players;
