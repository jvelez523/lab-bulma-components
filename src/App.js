import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navbar";
import FormField from "./components/FormField";
import Button from "./components/buttons"
import Signup from "./components/signup";
import Message from "./components/message"

function App() {
  return (
    <div class="content">
      <Nav />
      <FormField />
      <Button />
      <Signup />
      <Message />
    </div>
  );
}

export default App;
