import { Avatar } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import React from 'react'

function SidebarChat( {addnewchat} ) {
  return (
    !addnewchat ? (
      <div className="sidebar__chats">
      <Avatar/>
      <div className="sidebar__chatinfo">
        <h2>Hello </h2>
        <p>Last message seen....</p>
      </div>
    </div>
    ) : (

    <div className="sidebar__chats">
      <PersonAddIcon/>
      <h1> Add New chat </h1>
    </div>
      
  )
  )

}

export default SidebarChat