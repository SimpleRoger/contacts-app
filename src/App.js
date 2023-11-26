import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Id from "./components/Id";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/:id" element={<Id />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
