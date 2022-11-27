import { fireEvent, render, screen } from "@testing-library/react";

import AddInput from "../AddInput";

//mock setTodos function
const mockSetTodos = jest.fn();

describe('Render AddInput Test', () => {
    //first test of AddInput component && onChange fire event
    it('should render AddInput Component', () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        expect(inputElement).toBeInTheDocument();
        //fire input onChange event && check its value
        fireEvent.change(inputElement, { target: { value: "react app testing" } });
        expect(inputElement.value).toBe('react app testing');
    });
    //AddInput component test ADD Button event test
    it('should render AddInput Component', () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);

        //get the input element from compoenent Render
        const inputElement = screen.getByPlaceholderText('Add a new task here...');
        //get the button element from compoenent Render 
        const buttonElement = screen.getByRole('button');

        expect(inputElement).toBeInTheDocument();
        //fire input onChange event && check its value
        fireEvent.change(inputElement, { target: { value: "react app testing" } });
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    });
});
