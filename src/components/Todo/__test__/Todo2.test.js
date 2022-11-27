import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Todo from "../Todo";

const MockedTodoComponent = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
};

//add Todos 
const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

describe('Test Todo compoenent Render', () => {
    it('should Render Todo Compoenent', () => {
        render(<MockedTodoComponent />);
        //get input element
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        //get button element
        const buttonElement = screen.getByRole('button');

        /** 
        //fire input onChange Event
        fireEvent.change(inputElement, { target: { value: 'react app testing' } });
        //fire button onClick event
        fireEvent.click(buttonElement); 
        */
        //fire Events input && button ADD
        addTasks(['react app testing']);
        //test input value 
        expect(inputElement.value).toBe('');
        //get div list element
        const divListElement = screen.getByText(/react app testing/i);
        expect(divListElement).toBeInTheDocument();
    });
    it('should Render Multi Todos Compoenent', () => {
        render(<MockedTodoComponent />);
        //get input element
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        //get button element
        const buttonElement = screen.getByRole('button');
        //fire Events input && button ADD
        addTasks(['react app testing', 'react app testing', 'react app testing', 'react app testing']);
        //test input value 
        expect(inputElement.value).toBe('');
        //get div list element
        const divListElement = screen.getAllByText(/react app testing/i);
        expect(divListElement[0]).toBeInTheDocument();
        expect(divListElement[3]).toBeInTheDocument();
        expect(divListElement.length).toBe(4);
    });
});