import React from "react";
import Chat from "../Chat";
import Sidebar from "./Sidebar";

const Main = () => {
    return (
        <>
        <div className ="app"> 
            <div className="app__body">
                {/* Sidebar */}
                <Sidebar/>
                {/* chatbar */}
                <Chat/>
            </div>  
          
        </div>
        </>
    )
}

export default Main