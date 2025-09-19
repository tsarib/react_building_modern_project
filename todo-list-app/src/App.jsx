import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'Take out the garbage', isCompleted: true},
    {text: 'Do the laundry', isCompleted: true}
  ])
  const [incompletedTodos, setIncompletedTodos] = useState([
    {text: 'Make Dinner', isCompleted: false}
  ])

  return (
    <>
      <TodoList completedTodos={completedTodos} incompletedTodos={incompletedTodos} />
    </>
  )
}

export default App
