import React from "react";
import { useParams, Link } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";

const Player = () => {
  const { playerId } = useParams();

  const { loading, response: player } = usePlayer(playerId);

  if (loading === true) {
    return null;
  }

  if (!player) {
    return null;
  }
  return <div></div>;
};

export default Player;
