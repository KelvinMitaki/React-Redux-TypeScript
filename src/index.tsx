import React, { Component } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  state = {
    counter: 0
  };
  render() {
    return (
      <div>
        <button
          onClick={(): void =>
            this.setState({ counter: this.state.counter + 1 })
          }
        >
          Increment
        </button>
        <button
          onClick={(): void =>
            this.setState({ counter: this.state.counter - 1 })
          }
        >
          Decrement
        </button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.getElementById("root"));
