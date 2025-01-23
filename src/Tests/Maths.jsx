function Maths(props) {
    var array = [{ id: 1,Name:'apple',cal:195},
    {id: 2,Name:'orange',cal:20},
    {id: 3,Name:'graphs',cal:12},
      { id: 4, Name: 'banana', cal: 134 },
      {id: 5,Name:'Mango',cal:334}  ]
    // array.sort((a,b)=>b.Name.localeCompare(a.Name));
    // array.sort((a,b)=>b.cal-a.cal)
    var farray=array.filter(fruit =>fruit.cal >0 )
    var lists = farray.map(fruit => <li key={fruit.id}>{fruit.Name}: &nbsp;<b>{fruit.cal}</b></li>)
    
    return (
        <><ul className="lists">{lists}</ul>
          <ol className="lists">{lists}</ol>
            

        </>
    );
    
}
export default Maths