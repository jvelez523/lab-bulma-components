import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div class="buttons">
        <button class="button is-rounded my-class is-danger is-small">
          Button 1
        </button>
        <button class="button is-small is-success">Button 2</button>
      </div>
    );
  }
}

export default Button
