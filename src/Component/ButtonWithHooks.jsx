import React, { useState, useEffect } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is default state of function component");

    return (
        <div>
            {key1}
            <button onClick={() => setKey1("This is no default, mon!")}>Lick me Hook(er)s!</button>
        </div>
    );
}

export default ButtonWithHooks