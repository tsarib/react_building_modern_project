import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: 'Take out the garbage', isCompleted: true },
    { text: 'Do the laundry', isCompleted: true }
  ])
  const [incompletedTodos, setIncompletedTodos] = useState([
    { text: 'Make Dinner', isCompleted: false }
  ])

  // function to mark a todo item as completed
  function markTodoAsCompleted(text) {
    // Find the todo item in incompletedTodos
    setIncompletedTodos(incompletedTodos.filter(t => t.text !== text)); // Remove it from incompletedTodos
    setCompletedTodos([...completedTodos, {...incompletedTodos.find(t => t.text === text), isCompleted: true}]); // Add it to completedTodos
  }

  // function to delete a todo item
  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter(t => t.text !== text)); // Remove it from completedTodos
  }

  // function to create a new todo item
  function createTodo(text) {
    setIncompletedTodos([...incompletedTodos, { text, isCompleted: false }]);
  }

  // function to add a new todo item
  return (
    <>
      <TodoList completedTodos={completedTodos}
        incompletedTodos={incompletedTodos}
        onCompletedClicked={markTodoAsCompleted}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo} />
    </>
  )
}

export default App
