import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  DeleteTodoAction,
  fetchTodos,
  Todo
} from "./redux/actions";
import { StoreState } from "./redux/reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <button onClick={(): void => this.props.fetchTodos()}>Fetch</button>
        {this.props.todos.map(
          (todo: Todo): JSX.Element => (
            <div
              onClick={(): DeleteTodoAction => this.props.deleteTodo(todo.id)}
              key={todo.id}
            >
              <div>{todo.title}</div>
            </div>
          )
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
