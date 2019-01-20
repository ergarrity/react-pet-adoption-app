import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Callie",
    //     animal: "dog",
    //     breed: "Australian Shepherd"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Jerrold",
    //     animal: "unicorn",
    //     breed: "One of a kind"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Polly",
    //     animal: "cat",
    //     breed: "Princess of polymorphism"
    //   })
    // ]);
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Callie" animal="dog" breed="Australian Shepherd" />
        <Pet name="Jerold" animal="unicorn" breed="One of a kind" />
        <Pet name="Polly" animal="cat" breed="Princess of polymorphism" />
      </div>
    )
  }
}

render(React.createElement(App), document.getElementById("root"));
