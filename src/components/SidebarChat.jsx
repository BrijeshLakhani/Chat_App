import { Avatar } from '@mui/material'
import React from 'react'

function SidebarChat({addnewchat}) {
  return (
    !addnewchat  ? (
      <div className="sidebar__chats">
        <Avatar/>
        <div className="sidebar__chatinfo">
        <h2>{prpos.name}</h2>
        <p>Last message seen....</p>
        </div>
      </div>

    ): (

      <div className="sidebar__chats">
          <h3>Add New Chat</h3>
      </div>
    )
  )
}

export default SidebarChat