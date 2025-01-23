import React,{ useState } from 'react';

function Arrs() {
  
    const [fruit, setFruit] = useState(["Apple", "orange", "bannana"]);
    function adds() {
        var inputvalue = document.getElementsById("foodInput").value;
        document.getElementsById("foodInput").value = "";

        setFruit(f => [...f, inputvalue]);
    }
    return (
        <div>
                <h1>Veg-Lists:</h1>
                <ul>
                    {fruit.map((fru, index) => <li key={index}>{fru}</li>)}
                </ul>
                <input type="text" id="foodInput"  placeholder="Enter Fruit Name:" />
                <button onClick={adds}>Add</button>
         </div>
         
    );    
}
export default Arrs