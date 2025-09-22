import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todoSlice";

export default function TodoListItem({ todo }) {
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    
    return (
        <div>
            <h3>{todo.text}</h3>
            {/* Show "Completed!" only if the todo is completed */}
            {todo.isCompleted && <p>Completed!</p>}
            {/* Show button to delete or mark as completed */}
            {todo.isCompleted
                ? <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete Item</button> // if completed, show delete button
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark as Completed</button>} 
        </div>
    );
}