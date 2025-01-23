import React,{ useState } from "react";

function Count() {
    const [count, setcount] = useState(0);
    var increment = () => { setcount(count + 1) };
    var reset = () => { setcount(0) };
    var decrement=()=>{setcount(count-1)}
    return (
        <>
            <div className="counts">
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}
export default Count