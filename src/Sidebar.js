import React ,{useEffect, createContext, useState,setQuery} from 'react';

import "./Sidebar.css";
import DonutLargeIcon from   "@mui/icons-material/DonutLarge";
import {Avatar,IconButton} from "@material-ui/core";  
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Boo from "./Box";
import SidebarChat from "./SidebarChat";
 

function Sidebar(){
    return ( 
    <div class="sidebar">
         <div className="sidebar__Header">
            <Avatar src="https://th.bing.com/th/id/OIP.WfpWLGUTIR87x474wZ4slgHaHa?pid=ImgDet&amp;rs=1"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
         </div>

 
   <div>
   <Boo />
   </div>
  <div class="sidebar__chats">
    <SidebarChat />
    <SidebarChat />
    <SidebarChat /> 
</div>

  </div>
    );
}


export default Sidebar; 