import React from 'react';
import SuperHero from './SuperHero';
import Parent from './Parent';
import CtxProvider from "./CtxProvider";
import CtxChild1 from "./CtxChild1";
import CtxChild2 from "./CtxChild2";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.superHeroElement = React.createRef();
    }

    render() {
        return (
            <div>
                <SuperHero ref={this.superHeroElement} />
                <button onClick={this.handleClick}>Show real name</button>
                <hr />
                <Parent />
                <hr />
                <h2>React Context API</h2>
                <CtxProvider>
                    <CtxChild1 />
                    <CtxChild2 />
                </CtxProvider>
            </div>
        );
    }

    handleClick = () => {
        this.superHeroElement.current.changeName();
    }
}

export default Landing;
