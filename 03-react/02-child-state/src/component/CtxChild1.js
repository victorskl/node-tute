import React from 'react';
import CtxStore from "./CtxStore";

class CtxChild1 extends React.Component {
    render() {
        return (
            <div>
                At CtxChild1:
                <CtxStore.Consumer>
                    { context => (
                        // console.log(context)
                        <button onClick={() => {
                            context.setCtxMessage("Context Message Arrive...")
                        }}>
                            Send context message
                        </button>
                    )}
                </CtxStore.Consumer>
            </div>
        );
    }
}

export default CtxChild1;
