import React from 'react'
import { useParams } from 'react-router-dom'

const Team = () => {
    const { teamId } = useParams();
    return (
    <div>
      Team Page for { teamId}
    </div>
  )
}

export default Team

