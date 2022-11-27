import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TodoFooter from "../TodoFooter";

//mock Todos Footer && wrap it with Browser Router because Footer contain Link element
const MockTodoFooters = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
};

//check the render of Footer Todos counter compoenent
it('should Render TodosFooter component', () => {
    render(<MockTodoFooters numberOfIncompleteTasks={5} />);
    const countElement = screen.getByText(/5 tasks left/i);
    expect(countElement).toBeInTheDocument();
    expect(countElement).toBeVisible();
    expect(countElement).toHaveTextContent('5 tasks left');
    expect(countElement).toContainHTML('p');
    expect(countElement).toBeTruthy();
});

//check the render of Footer Todos counter compoenent
it('should Render TodosFooter component', () => {
    render(<MockTodoFooters numberOfIncompleteTasks={1} />);
    const countElement = screen.getByText(/1 task left/i);
    expect(countElement).toBeInTheDocument();
    expect(countElement).toBeVisible();
    expect(countElement).not.toBeFalsy();
    expect(countElement).not.toBeUndefined();
});

describe('test Todos Footer Block', () => {
    //check the render of Footer Todos counter compoenent
    it('should Render TodosFooter component 2', () => {
        render(<MockTodoFooters numberOfIncompleteTasks={5} />);
        const countElement = screen.getByText(/5 tasks left/i);
        expect(countElement).toBeInTheDocument();
        expect(countElement).toBeVisible();
        expect(countElement).toHaveTextContent('5 tasks left');
        expect(countElement).toContainHTML('p');
        expect(countElement).toBeTruthy();
    });

    //check the render of Footer Todos counter compoenent
    it('should Render TodosFooter component 2', () => {
        render(<MockTodoFooters numberOfIncompleteTasks={1} />);
        const countElement = screen.getByText(/1 task left/i);
        expect(countElement).toBeInTheDocument();
        expect(countElement).toBeVisible();
        expect(countElement).not.toBeFalsy();
        expect(countElement).not.toBeUndefined();
    });
});