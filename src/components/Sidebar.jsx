import React from "react"
import DonutLargeIcon from "@mui/icons-material/DonutLarge"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVerticon from "@mui/icons-material/MoreVert"
import Avatar from "@mui/material/Avatar"
import SearchIcon from "@mui/icons-material/Search"
import { IconButton } from "@mui/material"
import SidebarChat from "./SidebarChat"


function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar__header">
                <Avatar/>
                
                <div className="Sidebar__headreRight">
                    <IconButton>
                    <DonutLargeIcon/> 
                    </IconButton>
                    
                    <IconButton>
                    <ChatIcon />
                    </IconButton>

                    <IconButton>
                    <MoreVerticon/>
                    </IconButton>
                   

                </div>

            </div>

            <div className="Sidebar__search">   
                <div className="Sidebar__searchContainer">            
                    <SearchIcon/>
                    <input type="text" placeholder="search or start a new chat"></input> 
                </div>
            </div>
            <div className="sidebar__Chats">
                <SidebarChat addnewchat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>

    )
}

export default Sidebar