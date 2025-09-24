import axios from "axios";
import {
    loadingStarted,
    loadingFinished,
    loadingFailed
} from "./loadingSlice";

export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        const response = await axios.get('/api/todos'); // Adjusted to match the proxy setup
        const todos = response.data;
        console.log(todos);
        dispatch(loadingFinished(todos));
    } catch (error) {
        dispatch(loadingFailed(error));
    }

}