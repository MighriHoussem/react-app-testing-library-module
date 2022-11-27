import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if (!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    //handle enter button event on Todo input
    const handleEnterInput = (event) => {
        //check Enter keyDown && todo string not empty
        if (event.key === "Enter" && todo.trim().length) {
            let tempDodos = [...todos];
            tempDodos.push({
                id: v4(),
                task: todo,
                completed: false
            });
            setTodos(tempDodos);
            setTodo("");
        }
    }

    return (
        <div className="input-container">
            <input
                className="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
                onKeyDown={handleEnterInput}
            />
            <button
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput
