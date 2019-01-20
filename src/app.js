import React from 'react';
import { render } from 'react-dom';

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
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
