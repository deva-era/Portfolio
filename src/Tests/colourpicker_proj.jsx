import React,{ useState } from "react";

function changer() {
    const [color, setcolor] = useState('#FFFFFF');
    function changer(event) {
        setcolor(event.target.value);
    }
    return (
        <center>
        <div className="colour_container">
                <h1>Colour Picker</h1>
                <div className="colour_box" style={{backgroundColor: color}}>
                    <p>Selected Colour:{color}</p>
                </div>
                <h4>Choose Colour</h4>
                <input type="color" value={color} onChange={changer}
                style={{ cursor: 'pointer', width: '70px', height: '35px' }}/>
        </div>
        </center>
    );
}
export default changer
