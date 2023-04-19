import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../Utils/Slugify";

function CustomLink({ to, children }) {
  const location = useLocation();
}

function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>

      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink
            key={item}
            to={slugify(item)}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const team = searchParams.get("teamId");

  const { response: names, loading } = usePlayerNames(team);

  if (loading === true) {
    return null;
  }

  console.log({ names });
  return <div className="container">Players for team {team}</div>;
};

export default Players;
