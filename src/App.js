import "./App.css";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import React, {useState} from "react";

function App() {
  return (
    <div>
       {/* <Home />  */}
       <Todo />
    </div>
  );
  
}

export default App;
