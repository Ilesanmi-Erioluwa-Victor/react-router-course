import React from "react";
import { useParams, Navigate } from "react-router-dom";
import userArticle from "../hooks/useArticle";
import { Loading } from "./Loading";

const Article = () => {
  const { teamId, articleId } = useParams();

  const { response: article, loading } = userArticle({ teamId, articleId });
  
  return (
    <div className="panel">
      {loading ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
};

export default Article;
