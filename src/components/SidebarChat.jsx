import { Avatar } from '@mui/material'
import React from 'react'

function SidebarChat(props) {
  return (

    <div className="sidebar__chats">
      <Avatar />
      <div className="sidebar__chatinfo">
        <h2>{props.name}</h2>
        <p>Last message seen....</p>
      </div>
    </div>

  )

}

export default SidebarChat