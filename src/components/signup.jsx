import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div class="signupform">
        <div class="form">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="password" />
            </div>
          </div>
          <button class="button is-rounded my-class is-danger is-small" type="submit" form="form">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup