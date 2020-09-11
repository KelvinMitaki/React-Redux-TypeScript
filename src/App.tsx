import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo } from "./redux/actions";
import { StoreState } from "./redux/reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class App extends Component<AppProps> {
  render() {
    return <div></div>;
  }
}
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps, { fetchTodos })(App);
