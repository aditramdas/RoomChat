import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { AttachFile } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import InsetEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [photo, setphoto] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState();
  useEffect(() => {
    console.log("Change");
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);
  useEffect(() => {
    setphoto(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed a message");
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${photo}.svg`}
        />
        <div className="chat-headerInfo">
          <h2>{roomName}</h2>
          <p>Last Seen</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-message chatReceiver">
          <span className="sender">Adith Ramdas</span>
          Hello
          <span className="timestamp">12:30AM</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsetEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
