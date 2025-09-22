import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{
            text: 'Take out the garbage', isCompleted: true // Example todo item
        }],
    },
    // Define the reducers and actions
    reducers: {
        createTodo: state => {
            state.value = [...state.value, {
                text: 'New Todo', // Example text for the new todo
                isCompleted: false, // New todos are not completed by default
            }]
        },
        markAsCompleted: state => {
            const text = 'New Todo'; // Example text to identify the todo
            const todo = state.value.find(t => t.text === text); // Find the todo by text
            todo.isCompleted = true; // Mark the found todo as completed
        },
        deleteTodo: state => {
            const text = 'New Todo'; // Example text to identify the todo
            state.value = state.value.filter(t => t.text !== text); // Remove the todo with the specified text
        },
    }

});