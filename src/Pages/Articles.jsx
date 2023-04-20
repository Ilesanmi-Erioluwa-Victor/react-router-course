import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import useTeamsArticles from "../hooks/useArticles";

const Articles = () => {
  const { teamId } = useParams();

  const { loading, response: articles } = useTeamsArticles(teamId);

  if (loading === true) {
    return <p>LOADING...</p>;
  }
  return (
    <div className="container two-column">
      <Sidebar
        title={"Articles"}
        list={articles.map((article) => article.title)}
      />

      <Outlet />
    </div>
  );
};

export default Articles;
