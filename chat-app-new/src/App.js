import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-body">
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId" component={<Chat />}>
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
