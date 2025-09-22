import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./todoSlice";

export default function NewTodoForm() {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    // return a form with an input and a button
    return (
        <div>
            <input type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)} // update state on input change
            />
            <button onClick={() => {
                dispatch(createTodo(inputText));
                setInputText("");
            }}>Create Todo</button>
        </div>
    );
}