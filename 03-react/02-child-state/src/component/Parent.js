import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends React.Component {
    state = {
        data: "Hello World",
        message: ""
    };

    // allow child component to callback and set this parent state, hence form a global share state upto this sub-tree
    callbackFunction = (childData) => {
        this.setState({
            message: childData
        })
    };

    render() {
        return (
            <div>
                <Child1 parentCallback={this.callbackFunction} />  {/* pass callback fn as prop to child */}
                <p>{this.state.message}</p>
                <Child2 dataFromParent={this.state.data} />  {/* pass data as prop to child */}
            </div>
        );
    }
}

export default Parent;
