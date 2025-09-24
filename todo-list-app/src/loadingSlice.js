import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        value: {
            completed: true, // Initial loading state
            successful: false,
        },
    },
    // Define the reducers and actions
    reducers: {
        loadingStarted: (state) => {
            state.value.completed = false; // Set loading to true
        },
        loadingFinished: (state) => {
            state.value.completed = true; // Set loading to false
            state.value.successful = true; // Set loading to successful
        },
        loadingFailed: (state) => {
            state.value.successful = false; // Set loading to false on failure
            state.value.completed = true;
        }
    }

});

// Export the actions to be used in components by their names to be imported easily
export const { loadingStarted, loadingFinished, loadingFailed } = loadingSlice.actions;