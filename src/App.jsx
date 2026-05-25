import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/task/:id" element={<TaskDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
