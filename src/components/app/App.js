import "./App.css";
import {Home} from "../home/home";
import {Todo} from "../todo/todo";
import React from "react";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/header";

export const TodoContext = React.createContext();
function App (){

const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoContext.Provider
        value= {{
          todos,
          setTodos,
        }}
      >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider>

    </div>
  );
}
export default App;
