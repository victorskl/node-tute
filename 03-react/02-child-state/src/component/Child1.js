import React from 'react';

class Child1 extends React.Component {

    sendData = () => {
        this.props.parentCallback("Message from Child1...");
    };

    render() {
        return (
            <div>
                <button onClick={this.sendData}>Send data to parent</button>
            </div>
        );
    }
}

export default Child1;
