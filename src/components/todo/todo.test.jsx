import {Todo} from "./todo";
import {render, screen} from '@testing-library/react';
import { TodoProvider } from "../state/todo/todoContext";

describe('Todo component', ()=> {

    test('Adding a Todo Item using the add button', () => {
        render(<TodoProvider>
                <Todo />
            </TodoProvider>);

        const todoItem = screen.queryAllByTestId("todo");
        console.log(todoItem);
    });

});