import React from 'react';

class Child2 extends React.Component {
  render() {
    return (
      <div>
        At Child2, the data from parent say: <span style={{color: "red"}}>{this.props.dataFromParent}</span>
      </div>
    );
  }
}

export default Child2;
