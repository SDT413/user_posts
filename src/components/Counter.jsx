import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>Decrement</button>
        </div>
    );
};

export default Counter;