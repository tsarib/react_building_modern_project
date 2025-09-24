import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadTodos } from './thunks'
import './App.css'
import TodoList from './TodoList'

function App() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    dispatch(loadTodos());
  }, []); // Load todos when the component mounts



  // function to add a new todo item
  return (
    <>
      <TodoList />
    </>
  )
}

export default App
