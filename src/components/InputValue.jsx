import React, {useState} from 'react';

const InputValue = () => {
    const [value, setValue] = useState("Hello World");
    return (
        <div>
            <h1>Value: {value}</h1>
            <input type="text" placeholder={value} onChange={(e) => {
                setValue(e.target.value);
            }
            }/>
        </div>
    );
};

export default InputValue;