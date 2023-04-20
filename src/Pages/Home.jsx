import React from "react";
import { Link } from "react-router-dom";

import TeamLogo from "../components/TeamLogo";
import useTeamNames from "../hooks/useTeamNames";
import { Loading } from "../components/Loading";

const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return null;
  }
  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>

      <h3 className="header text-center">Select a team.</h3>

      <div className="home-grid">
        {loading ? (
          <Loading />
        ) : (
          teamNames.map((id) => (
            <Link
              key={id}
              to={`/${id}`}
            >
              <TeamLogo
                id={id}
                width="125px"
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
