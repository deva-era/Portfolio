function Click() {
    var done = (name) => {
        // console.log(`${name} Dont touch me!!`)
        name.target.textContent = "hi";
    }
    return (
        <button className="clickme"
        onClick={(name)=>done(name)}
        >Click me </button>
    );
}
export default Click