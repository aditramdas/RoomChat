import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
