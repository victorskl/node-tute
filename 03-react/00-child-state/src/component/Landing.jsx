import React from 'react';
import SuperHero from './SuperHero';
import Parent from './Parent';
import CtxProvider from "./CtxProvider";
import CtxChild1 from "./CtxChild1";
import CtxChild2 from "./CtxChild2";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.superHeroElement = React.createRef();  // parent creates a html element reference
  }

  handleClick = () => {
    this.superHeroElement.current.changeName(); // then parent manipulates child's state
  }

  render() {
    return (
      <div>

        <h2>1. Landing & SuperHero</h2>
        <p style={{fontStyle: "italic"}}>Using React.createRef()</p>

        <span style={{color: "limegreen"}}><SuperHero ref={this.superHeroElement}/></span>
        <button onClick={this.handleClick}>Show real name</button>

        <hr/>

        <h2>2. Parent & Child</h2>
        <Parent/>

        <hr/>

        <h2>3. React Context API</h2>
        <CtxProvider>
          <CtxChild1/>
          <CtxChild2/>
        </CtxProvider>

      </div>
    );
  }
}

export default Landing;
