import "./App.css";
import { Home } from "../home/home";
import { Todo } from "../todo/todo";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
