import '../app/App.css';
import {grey, teal} from "@mui/material/colors";
import {TextField, Checkbox, Button, IconButton} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import {React, useState, useContext} from "react";
import {TodoContext} from "../app/App.js";


export const Todo = () => { 

const { setTodos, todos} = useContext(TodoContext);

function deleteTodo (deletedTodo) {
  setTodos(todos.filter(todo => todo.text !== deletedTodo));
  }
      
  function addTodo (inputText) {
  const newTodos = [...todos, inputText];
  setTodos(newTodos);
  }

  const [inputText, setInputText] = useState('');

  return (
  <table>
    <tr>
    <th colSpan={3}>
    <h1 id = "Todoheader">To Do</h1>
    </th>
    </tr>
    <tr>
    <td colSpan={2}>
    <TextField id="outlined-basic"  variant="outlined" size= "small"
      placeholder = "Enter Task"
      onChange={(event) => setInputText(event.target.value)}
    />
    </td>
    <td>
    <Button onClick={() => addTodo(inputText, setTodos)} >
      Add Task
    </Button> 
    </td>
    </tr>     
    {todos.map((todo) => (<TodoItem text={todo.text} isComplete={todo.isComplete} deleteTodo={deleteTodo}/>)
    )}
  </table>
  );
}

const TodoItem = (props) => {

  const [textColor, setTextColor] = useState(teal);
  const [isCompleted, setCompleted] = useState(false);

  const handleColorChange = () => {
    setCompleted(!isCompleted);
    setTextColor(isCompleted ? grey : teal);
};

  return (
  <tr>
    <td style = {{color:textColor}}> 
      {props.text} 
    </td>
    <td>
      <Checkbox onChange = {handleColorChange} />
    </td>
    <td>
      <IconButton aria-label="delete" size="medium" onClick={() => props.deleteTodo(props.text)}>
         <DeleteIcon fontSize="inherit" />
       </IconButton>
   </td>
  </tr> 
  );
}

