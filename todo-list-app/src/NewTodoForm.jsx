import { useState } from "react";

export default function NewTodoForm({ onCreateClicked }) {
    const [inputText, setInputText] = useState("");

    // return a form with an input and a button
    return (
        <div>
            <input type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)} // update state on input change
            />
            <button onClick={() => { onCreateClicked(inputText); setInputText(""); }}>Create Todo</button> 
        </div>
    );
}