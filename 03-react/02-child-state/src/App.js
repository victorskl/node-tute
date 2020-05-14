import React from 'react';
import './App.css';
import SuperHero from './SuperHero';

/*
How to change the state of a child component from its parent in React
https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.superHeroElement = React.createRef();
    }

    render() {
        return (
            <div className={App}>
                <SuperHero ref={this.superHeroElement} />
                <button onClick={this.handleClick}>Show real name</button>
            </div>
        );
    }

    handleClick = () => {
        this.superHeroElement.current.changeName();
    }
}

export default App;

//TODO
// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
// https://medium.com/a-layman/controlling-state-between-two-react-child-components-72a326c745a4
