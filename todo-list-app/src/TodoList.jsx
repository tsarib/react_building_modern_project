import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"

export default function TodoList({ completedTodos, incompletedTodos, onCompletedClicked, onDeleteClicked, onCreateClicked }) {
    return (
        <div>
            {/* Show the new todo form */}
            <h1>Todo List</h1>
            <NewTodoForm onCreateClicked={onCreateClicked} />
            {/* Show the completed todos */}
            <h2>Completed:</h2>
            {/* Map over completedTodos and render a TodoListItem for each */}
            {completedTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} onDeleteClicked={onDeleteClicked} />
            ))}
            {/* Show the incompleted todos */}
            <h2>Incompleted:</h2>
            {incompletedTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} onCompletedClicked={onCompletedClicked} />
            ))}
        </div>
    )
}