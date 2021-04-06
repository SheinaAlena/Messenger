import React from "react";
import Message from "./Message.jsx";
import "../styles/styles.css";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";

import SendIcon from "material-ui/svg-icons/content/send";

export default class MessageField extends React.Component {
  state = {
    messages: [
      { text: "Привет!", sender: "bot" },
      { text: "Как дела?", sender: "bot" },
    ],
  };

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === "me") {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { text: "Не приставай ко мне, я робот!", sender: "bot" },
            ],
          }),
        1000
      );
    }
  }

  handleClick = () => {
    this.setState({
      messages: [...this.state.messages, { text: "Нормально", sender: "me" }],
    });
  };

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} text={message.text} />
    ));

    return (
      <div className="layout">
        <div className="message-field">{messageElements}</div>
        <div style={{ width: "100%", display: "flex" }}>
          <TextField
            name="input"
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: "22px" }}
            onChange={this.handleChange}
            value={this.state.input}
            onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
          />
          <FloatingActionButton
            onClick={() => this.handleClick(this.state.input)}
          >
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}
