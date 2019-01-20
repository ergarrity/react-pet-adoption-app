import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Callie",
        animal: "dog",
        breed: "Australian Shepherd"
      }),
      React.createElement(Pet, {
        name: "Jerrold",
        animal: "unicorn",
        breed: "One of a kind"
      }),
      React.createElement(Pet, {
        name: "Polly",
        animal: "cat",
        breed: "Princess of polymorphism"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
