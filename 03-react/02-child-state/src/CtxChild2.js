import React from 'react';
import CtxStore from "./CtxStore";

class CtxChild2 extends React.Component {
    render() {
        return (
            <div>
                <CtxStore.Consumer>
                    { context => (
                        // console.log(context)
                        <p>At CtxChild2: {context.state.ctxMessage}</p>
                    )}
                </CtxStore.Consumer>
            </div>
        );
    }
}

export default CtxChild2;
