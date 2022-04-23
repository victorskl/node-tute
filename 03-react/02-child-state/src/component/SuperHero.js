import React from "react";

class SuperHero extends React.Component {
    state = {
        name: "Batman",
    };

    changeName = () => {
        this.setState({ name: "Green Arrow" });
    };

    render() {
        return <div>{this.state.name}</div>;
    }
}

export default SuperHero;
