import Axios from "axios";
import { Dispatch } from "redux";

const URL = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await Axios.get<Todo[]>(URL);
  dispatch({
    type: "FETCH_TODOS",
    payload: res.data
  });
};
