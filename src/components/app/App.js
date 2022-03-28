import "./App.css";
import {Home} from "../home/home";
import {Todo} from "../todo/todo";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import{Chat} from  "../chat/chat";
import { TodoProvider } from "../state/todo/todoContext";


function App (){

  return (
    <div>
      <TodoProvider>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path= "/chat" element={<Chat/>} />
        </Routes>
      </HashRouter>
      </TodoProvider>
    </div>
  );
}
export default App;
