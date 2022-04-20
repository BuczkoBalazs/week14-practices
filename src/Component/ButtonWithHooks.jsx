import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is default state of function component");
    const [key2, setKey2] = useState(0);

    return (
        <div>
            {key1}
            <button onClick={() => setKey1("This is no default, mon!")}>Lick me Hooks!</button>
            <button onClick={() => setKey2(1)}>{key2}</button>
        </div>
    );
}

export default ButtonWithHooks