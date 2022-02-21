import '../app/App.css';
import {grey, teal} from "@mui/material/colors";
import {TextField, Checkbox, Button, IconButton} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";

export const Todo = (props) => {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  function addTodo () {
    const newTodos = [...todos, inputText];
    setTodos(newTodos);
  }

  function deleteTodo (deletedTodo) {
    setTodos(todos.filter(todo => todo.text !== deletedTodo));
  }

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
      onChange={(event) => setInputText({text: event.target.value})}
    />
    </td>
    <td>
    <Button onClick={addTodo} >
      Add Task
    </Button> 
    </td>
    </tr>     
    {todos.map((todo) => (<TodoItem text={todo.text} isComplete={todo.isComplete} deleteTodo={deleteTodo}/>
    ))}
  </table>
  );
}

const TodoItem = (props) => {

  const [textColor, setTextColor] = useState(teal);
  const [isCompleted, setCompleted] = useState(false);

  const handleColorChange = () => {
    setCompleted(!isCompleted);
    setTextColor(isCompleted ? grey : teal);

  console.log({isCompleted});
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

