import React, { useState } from "react";

function Change() {

    const [name, setname] = useState("Guest");
    const [money, setmoney] = useState(0);
    function namechange(event) {
        setname(event.target.value)
    }
    function moneychange(event) {
        setmoney(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={namechange} />
            <p>Name:&nbsp;{name}</p>
            <br></br>
            <input value={ money} type="number" onChange={moneychange}></input>
            <p>Money: ${money}</p>
        </div>
    );
}
export default Change