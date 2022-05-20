import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MostrarPersona from "./components/MostrarPersona/MostrarPersona";

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" components={MostrarPersona}>
        <MostrarPersona />
      </Route>
    </Router>
    </div>
  );
}

export default App;
