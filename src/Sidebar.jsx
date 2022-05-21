import React from "react"
import DonutLargeIcon from "@mui/icons-material/DonutLarge"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Avatar from "@mui/material/Avatar"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar__header">
                <Avatar/>
                <div className="Sidebar__headreRight">
                    {/* <IconButton>
                    <DonutLargeIcon/> 
                    </IconButton>

                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                   
                    <IconButton>
                    <ChatIcon />
                    </IconButton> */}

                </div>

            </div>
        </div>
    )
}

export default Sidebar