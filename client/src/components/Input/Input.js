import React from "react";
import { Button } from "react-bootstrap";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Enter a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <Button
      className="sendButton"
      disabled={!message}
      onClick={(e) => sendMessage(e)}
    >
      Send
    </Button>
  </form>
);

export default Input;
