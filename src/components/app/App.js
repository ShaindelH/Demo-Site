import "./App.css";
import {Home} from "../home/home";
import {Todo} from "../todo/todo";
import React from "react";
//import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header";
import{Chat} from  "../chat/chat";
import { TodoProvider } from "../state/todo/todoContext";

function App (){

  return (
    <div>
      <TodoProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path= "/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      </TodoProvider>
    </div>
  );
}
export default App;
