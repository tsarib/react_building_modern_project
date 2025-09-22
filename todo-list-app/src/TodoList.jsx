import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"
import { useSelector } from "react-redux"

export default function TodoList({ onCreateClicked }) {
    const todos = useSelector(state => state.todos.value); // Access the todos from the Redux store

    return (
        <div>
            {/* Show the new todo form */}
            <h1>Todo List</h1>
            <NewTodoForm onCreateClicked={onCreateClicked} />
            {/* Show the completed todos */}
            <h2>Completed:</h2>
            {/* Map over completedTodos and render a TodoListItem for each */}
            {todos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
            {/* Show the incompleted todos */}
            <h2>Incompleted:</h2>
            {todos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
        </div>
    )
}