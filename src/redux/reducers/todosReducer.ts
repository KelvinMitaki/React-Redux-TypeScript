import { DeleteTodoAction, FetchTodosAction, Todo } from "../actions";
import { ActionTypes } from "../actions/types";

type Action = FetchTodosAction | DeleteTodoAction;

const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo): boolean => todo.id !== action.payload);
    default:
      return state;
  }
};
export default todosReducer;
