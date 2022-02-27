import react from 'react';
import {Input, Checkbox} from '@mui/material';


function App(){

    const[todos, setTodos] = useState([]);

    function addTodoItem(todo){
        setTodos([todo, ...todos]);
    }

    return (
        <div className= "App">
            <ToDoForm addTodoItem={addTodoItem} />;
        </div>
    )

}

function ToDoForm(){

    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    });

    function addItem(event){
        setTodo({...todo, task:event.target.value});
    }

    return (
        <form>
        <input
        name="task" 
        type = "text"
        value={todo.task}
        onChange={addItem}/>
        <button type="submit"/>
        </form>
    )
}

function TodoList({todos}){
    return(
        <ul>
            {todos.map(todo =>(Todo todo={todo}))}
        </ul>
    )
}