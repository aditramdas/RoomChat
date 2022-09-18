import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Dvr } from "@material-ui/icons";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addChat }) {
  const createChat = () => {
    const groupName = prompt("Enter the name of group.");
    if (groupName) {
      db.collection("rooms").add({
        name: groupName,
      });
    }
  };

  const [photo, setphoto] = useState("");
  useEffect(() => {
    setphoto(Math.floor(Math.random() * 5000));
  }, []);
  return !addChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="SidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${photo}.svg`}
        />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="SidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
