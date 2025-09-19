import TodoListItem from "./TodoListItem"

export default function TodoList({ completedTodos, incompletedTodos }) {
    return (
        <div>
            <h1>Todo List</h1>
            <p>New todo form will go here...</p>
            <h2>Completed:</h2>
            {completedTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
            <h2>Incompleted:</h2>
            {incompletedTodos.map((todo, index) => (
                <TodoListItem key={index} todo={todo} />
            ))}
        </div>
    )
}