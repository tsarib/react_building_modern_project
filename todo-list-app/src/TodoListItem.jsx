export default function TodoListItem({ todo, onCompletedClicked, onDeleteClicked }) {
    return (
        <div>
            <h3>{todo.text}</h3>
            {/* Show "Completed!" only if the todo is completed */}
            {todo.isCompleted && <p>Completed!</p>}
            {/* Show button to delete or mark as completed */}
            {todo.isCompleted
                ? <button onClick={() => onDeleteClicked(todo.text)}>Delete Item</button> // if completed, show delete button
                : <button onClick={() => onCompletedClicked(todo.text)}>Mark as Completed</button>} 
        </div>
    );
}