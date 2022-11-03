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
  const [messages , setMessages] = useState("");
  useEffect(() => {
    setphoto(Math.floor(Math.random() * 5000));
  }, []);
  useEffect(() =>{
    if(id){
      db.collection("rooms").doc(id).collection("messages").orderBy("timestamp" , "desc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
    }
  } , [id])
  return !addChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="SidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${photo}.svg`}
        />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
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
