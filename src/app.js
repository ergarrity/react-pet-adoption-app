const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, 'Adopt Me!'),
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
    ])
}

ReactDOM.render(React.createElement(App),  document.getElementById("root"))