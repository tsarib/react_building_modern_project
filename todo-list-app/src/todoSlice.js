import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{
            text: 'Take out the garbage', isCompleted: true // Example todo item
        }
        , {
            text: 'New Todo', isCompleted: false // Example todo item
        }],
    },
    // Define the reducers and actions
    reducers: {
        createTodo: (state, action) => {
            state.value = [...state.value, {
                text: action.payload, // Use the text from the action payload
                isCompleted: false, // New todos are not completed by default
            }]
            // const text = action.payload; // Get the text from the action payload
            // state.value.push({ text, isCompleted: false }); // Add the new todo to the list
        },
        markTodoAsCompleted: (state, action) => {
            const text = action.payload; // Get the text from the action payload
            const todo = state.value.find(t => t.text === text); // Find the todo by text
            todo.isCompleted = true; // Mark the found todo as completed
        },
        deleteTodo: (state, action) => {
            const text = action.payload; // Get the text from the action payload
            state.value = state.value.filter(t => t.text !== text); // Remove the todo with the specified text
        },
    }

});

// Export the actions to be used in components by their names to be imported easily
export const { createTodo, markTodoAsCompleted, deleteTodo } = todoSlice.actions;