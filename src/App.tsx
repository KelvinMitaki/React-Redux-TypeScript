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

interface AppState {
  fetching: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }
  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={(): void => {
            this.setState({ fetching: true });
            this.props.fetchTodos();
          }}
        >
          Fetch
        </button>
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
        {this.state.fetching && <h4>Fetching...</h4>}
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
