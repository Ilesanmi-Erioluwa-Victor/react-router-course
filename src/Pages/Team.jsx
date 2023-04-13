import React from 'react'
import { useParams } from 'react-router-dom'
import useTeamNames from "./hooks/useTeamNames";
import useTeamArticles from "./hooks/useTeamArticles";


const Team = () => {
    const { teamId } = useParams();
    return (
    <div>
      Team Page for { teamId}
    </div>
  )
}

export default Team

