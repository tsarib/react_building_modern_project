import './App.css'
import TodoList from './TodoList'

function App() {

  // function to create a new todo item
  function createTodo(text) {
    setIncompletedTodos([...incompletedTodos, { text, isCompleted: false }]);
  }

  // function to add a new todo item
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
