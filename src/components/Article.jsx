import React from "react";
import { useParams } from "react-router-dom";
import userArticle from "../hooks/useArticle";

const Article = () => {
  const { teamId, articleId } = useParams();

  const { response: article, loading } = userArticle({ teamId, articleId });

  if (loading === true) {
    return null;
  }
  return <div></div>;
};

export default Article;
