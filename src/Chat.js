import React from 'react';
import "./Chat.css";
import {Avatar,IconButton} from "@material-ui/core"; 
import { MoreVert, SearchOutlined,AttachFile} from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div class="Chat">
      <div class="chatHeader">
      < Avatar />
      <div class="chatHeaderinfo">
       <h3>RoomName</h3>
       <p>Last seen at ...</p>
      </div>

     <div className="chatHeaderright">
      <IconButton>
        <SearchOutlined/>
      </IconButton>
      <IconButton>
        <AttachFile/>
      </IconButton>
      <IconButton>
      <MoreVert/>
      </IconButton>
    </div>
    </div>

     <div class="chat__body">
      <div class="chat__message">
        <div className="chat__name">Ankit </div>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </div>
      <div class="chat__message chat__receiver">
        <span className="chat__name">Ankit </span>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </div>
      <div class="chat__message">
        <span className="chat__name">Ankit </span>
        This is a message
        <span className="chat__timestamp">{new Date().toUTCString()}</span>
      </div>
      <div class="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
     </div>
      


 </div>
  );
}

export default Chat;
