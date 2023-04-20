import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import useTeamNames from '../hooks/useTeamNames'

const Teams = () => {
  return (
    <div className='container'>
      <Sidebar 
        title={"Teams"}
        list={}
      />
      Teams
    </div>
  )
}

export default Teams
