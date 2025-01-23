import React,{ useState, useEffect } from "react";


function Clock() {
    const [time, settime] = useState(new Date());
    console
     
    useEffect(() => {
        const interval=setInterval(() => {
            settime(new Date())
        }, 1000);
    })
    function times() {
        let hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        var timeline = hour < 12 ? "AM" : "PM";
        
        return `${hour}:${min}:${sec} ${timeline}`;
    }


    return (
        <center>
            <div className="clock_container">
                <h1>Clock</h1>
                <span>{ times()}</span>
            </div>
        </center>
    );
}
export default Clock