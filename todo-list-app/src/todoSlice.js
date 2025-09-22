import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
    },
    // Define the reducers and actions
    reducers: {
        createTodo: state => state,
        markAsCompleted: state => state,
        deleteTodo: state => state,
    }

});