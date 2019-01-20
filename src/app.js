import React from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import Pet from './Pet';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" })
    
    promise.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Callie" animal="dog" breed="Australian Shepherd" />
        <Pet name="Jerold" animal="unicorn" breed="One of a kind" />
        <Pet name="Polly" animal="cat" breed="Princess of polymorphism" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
