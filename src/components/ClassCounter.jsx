import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props); // This is required in a class component
        this.state = {
            count: 0
        };
        this.decrement = this.decrement.bind(this);
    }
    increment = () => { // This is a class property, so it doesn't need to be bound in the constructor
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement()  { // This is a class method, so it needs to be bound in the constructor
        this.setState({
            count: this.state.count - 1
        });
    };
    render() {
        return ( // This is JSX
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default ClassCounter;