import Axios from "axios";
import { Dispatch } from "redux";

const URL = "https://www.jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await Axios.get(URL);
  dispatch({
    type: "FETCH_TODOS",
    payload: res.data
  });
};
