import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends React.Component {
  // in this case, parent manage the state and, shared across children
  state = {
    data: "Hello World",
    message: ""
  };

  // allow child component to call back and set this parent state, hence form a global share state upto this subtree
  callbackFunction = (childData) => {
    this.setState({
      data: "Bonjour le monde",
      message: childData
    })
  };

  render() {
    return (
      <div>
        <div>
          <Child1 parentCallback={this.callbackFunction}/> {/* pass callback fn as prop to child */}
          <span style={{color: "cyan"}}>{this.state.message}</span>
        </div>
        <div style={{marginTop: "2em"}}>
          <Child2 dataFromParent={this.state.data}/> {/* pass data as prop to child */}
        </div>
      </div>
    );
  }
}

export default Parent;
