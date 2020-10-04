import React from 'react';
import CtxStore from "./CtxStore";

// React Context Provider
// The provider is the boss (hence parent) for its children (the global store of all the states and callback
// functions to manipulate those states). Who-ever needs anything has to contact the provider
// first to access the objects.

class CtxProvider extends React.Component {
    // global state share between CtxChild1 and CtxChild2
    // or whichever child component wrapped under this CtxProvider component
    state = {
        ctxMessage: ""
    };

    render() {
        return (
            <CtxStore.Provider value={{
                    state: this.state,
                    setCtxMessage: value => {
                        const ctxMessage = value;
                        this.setState({ctxMessage});
                        console.log(value);
                    }
                }}>

                {/*this indicates that the global store is accessible to all the child tags with CtxProvider as Parent*/}
                {this.props.children}
            </CtxStore.Provider>)
    }
}

export default CtxProvider;
