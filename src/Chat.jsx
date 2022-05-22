import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import AttachmentIcon from '@mui/icons-material/Attachment'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import MicIcon from '@mui/icons-material/Mic'
import SendIcon from '@mui/icons-material/Send'

function Chat() {
  return (
    <div className="Chat">
        <div className="chat__header">
        <Avatar/>
        <div className="chat__headreInfo">
            <h3>Room name</h3>
            
            <p>Last seen...</p>
        </div>
        <div className="header__right">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            
            <IconButton>
                <AttachmentIcon/>
            </IconButton>
            
            <IconButton>
                <MoreVertIcon/>
            </IconButton>


        </div>
    </div>
       <div className="Chat__body">
            <p className="Chat__message  Chat__receiver">
                <span className="Chat__name"> Brijesh Lakhani</span>
                This is test message
                <span className="Chat__time">12:04 PM</span>
            </p>
        </div>
        <div className="Chat__body">
            <p className="Chat__message">
                <span className="Chat__name"> Brijesh Lakhani</span>
                This is test message
                <span className="Chat__time">12:04 PM</span>
            </p>
        </div>
        
        <div className="Chat__footer">
            <EmojiEmotionsIcon/>
            <AttachmentIcon/>
            <form>
                <input type="text" placeholder="Type Your Message"></input>
                
            </form>
            <MicIcon/>


        </div>

    </div>
  )
}

export default Chat