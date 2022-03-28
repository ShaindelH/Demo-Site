import '../app/App.css';
import {grey, teal} from "@mui/material/colors";
import {TextField, Checkbox, Button, IconButton} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState, useContext} from "react";
import {TodoContext} from "../state/todo/todoContext";

export const Todo = () => { 

const {todos, setTodos} = useContext(TodoContext);
const [inputText, setInputText] = useState('');
const [key, setKey] = useState(0);

function deleteTodo (deletedTodo) {
  setTodos(todos.filter(todo => todo.key !== deletedTodo));
}
      
function addTodo (inputText) {
  const newTodos = [...todos, {text: inputText, key: key, isComplete: false}];
  setTodos(newTodos);
  setKey(key+1);
}

return (
  <table data-testid="todo">
    <tbody>
    <tr>
    <th colSpan={3}>
    <h1 id = "Todoheader">To Do</h1>
    </th>
    </tr>
    <tr>
    <td colSpan={2}>
    <TextField id="outlined-basic" variant="outlined" size= "small"
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
    {todos.map((todo) => (<TodoItem todo={todo} deleteTodo={deleteTodo}/>)
    )}</tbody>
  </table>
  );
}

const TodoItem = (props) => {

  const {todos, setTodos} = useContext(TodoContext);

  const handleColorChange = () => {
    
    const newTodos = todos.map(todo => {

      if (props.todo.key === todo.key) {
         return {...todo, isComplete: !todo.isComplete};
      }
      else {
        return todo;
      }
    });
    setTodos(newTodos);

}

  return (
  <tr>
    <td style= {{color: props.todo.isComplete ? grey : teal}}> 
      {props.todo.text} 
    </td>
    <td>
      <Checkbox checked={props.todo.isComplete} onChange = {handleColorChange} />
    </td>
    <td>
      <IconButton aria-label="delete" size="medium" onClick={() => props.deleteTodo(props.todo.key)}>
         <DeleteIcon fontSize="inherit" />
       </IconButton>
   </td>
  </tr> 
  );
}

