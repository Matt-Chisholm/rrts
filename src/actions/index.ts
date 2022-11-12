import axios from "axios";

export const fetchTodos = () => {
    return async (dispatch: any) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        dispatch({
            type: "FETCH_TODOS",
            payload: response.data
        });
    };
};