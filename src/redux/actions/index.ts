import Axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const URL = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}
export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await Axios.get<Todo[]>(URL);
  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: res.data
  });
};
